import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  @Input() client?: Client;

  constructor(public clientService: ClientService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.clientService.removerClient(this.client!);
  }
}
