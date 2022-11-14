import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CustomDialogComponent } from '../../shared/custom-dialog/custom-dialog.component';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() client?: Client;

  constructor(
    public dialog: MatDialog, 
    public clientService: ClientService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  onClick(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '550px',
      data: {name: this.client?.name,
         cpf: this.client?.cpf, lastName: this.client?.lastName},
    });

    dialogRef.afterClosed().subscribe(result => {
      let client = new Client(this.client?.id!,
        result.cpf, result.name, result.lastName);

      if (client) {
        this.clientService.editClient(client).subscribe({
          next: () => this.errorMessage('Cliente editado com sucesso!'),
          error: () => this.errorMessage('Erro ao editar cliente!'),
          complete: () => this.clientService.fetchaAllClients()
        });
      }
    });
  }

  errorMessage(message: string) {
    let config = new MatSnackBarConfig();

    config.duration = 5 * 1000;
    this._snackBar.open(message, 'Fechar', config);
  }
}
