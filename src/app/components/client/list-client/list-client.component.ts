import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Client>([]);
  displayedColumns: string[] = ['demo-id',
   'demo-name', 'demo-lastName', 'demo-cpf',
    'demo-edit-button', 'demo-remove-button'];
  
    @ViewChild(MatPaginator) paginator?: MatPaginator;
    
  constructor(private clientService: ClientService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

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
