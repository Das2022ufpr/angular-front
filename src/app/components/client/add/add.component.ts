import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../../shared/custom-dialog/custom-dialog.component';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  name: string = "";
  cpf: string = "";
  lastName: string = "";

  constructor(public dialog: MatDialog, public clientService: ClientService) {}

  ngOnInit(): void {
  }

  onClick(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '850px',
      data: {name: this.name, cpf: this.cpf, lastName: this.lastName},
    });

    dialogRef.afterClosed().subscribe(result => {
      let client = new Client(result.id, result.cpf, result.name, result.lastName);
      
      if (client) {
        this.clientService.addClient(client);
      }
    });
  }
}
