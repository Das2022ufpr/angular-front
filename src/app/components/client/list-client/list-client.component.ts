import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../model/client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  @Input() clientsChild: Client[] = [];

  displayedColumns: string[] = ['demo-id',
   'demo-name', 'demo-age', 'demo-cpf',
    'demo-edit-button', 'demo-remove-button'];

  constructor() { }

  ngOnInit(): void {}
}
