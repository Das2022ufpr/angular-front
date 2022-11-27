import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from '../../client/model/client';

import { ClientService } from '../../client/service/client.service';
import { OrderDialogComponent } from '../shared/order-dialog/order-dialog.component';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  cpfExists = false;
  cpf: string = "";
  
  constructor(
    public dialog: MatDialog, 
    public clientService: ClientService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.clientService.isClientLogged().subscribe({
      next: (newValue) => {
        this.cpfExists = newValue;
      }
    });
  }

  onClick(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '850px',
      data: {cpf: this.cpf},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.clientService.fetchClientByCPF(result).subscribe({
        next: (client) => {
          if (client != null) {
            this.showSucessSnackBar(client);
          } else {
            this.showErrorSnackBar();
          }
        },
        error: () => this.showErrorSnackBar(),
      });
    });
  }

  showSucessSnackBar(client: Client) {
    this.clientService.addClientInLocalStorage(client);

    this._snackBar.open(`${client.name} encontrado com sucesso!`, 'Fechar', {
      duration: 3000
    });
  }

  showErrorSnackBar() {
    this._snackBar.open('Cpf não encontrado!', 'Fechar', {
      duration: 3000
    });
  }
}
