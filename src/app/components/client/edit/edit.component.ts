import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(public dialog: MatDialog, 
    public clientService: ClientService) { }

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
        this.clientService.editClient(client);
      }
    });
  }
}
