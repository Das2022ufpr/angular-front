import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClientService } from '../../client/service/client.service';
import { OrderDialogComponent } from '../shared/order-dialog/order-dialog.component';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  cpf: string = "";
  cpfExists = false;

  constructor(
    public dialog: MatDialog, 
    public clientService: ClientService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  onClick(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '850px',
      data: {cpf: this.cpf},
    });

    dialogRef.afterClosed().subscribe(result => {
      // if (this.clientService.isCPFExists(result.cpf)) {
      //   this.clientService.fetchClientByCPF(result.cpf);
      //   this.showSucessSnackBar();
      // } else {
      //   this.showErrorSnackBar();
      // }
    });
  }

  showSucessSnackBar() {
    this._snackBar.open('Cliente localizado com sucesso!', 'Fechar', {
      duration: 3000
    });
  }

  showErrorSnackBar() {
    this._snackBar.open('Cpf não encontrado!', 'Fechar', {
      duration: 3000
    });
  }
}
