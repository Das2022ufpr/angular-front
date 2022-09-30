import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  dataSource = new MatTableDataSource<Client>([]);
  displayedColumns: string[] = ['demo-id',
   'demo-name', 'demo-age', 'demo-cpf',
    'demo-edit-button', 'demo-remove-button'];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.fetchClients();
  }

  private fetchClients(): void {
    this.clientService
                .fetchaAllClients().subscribe((clients) => {
                  this.dataSource.data = clients;
                });
  }
}
