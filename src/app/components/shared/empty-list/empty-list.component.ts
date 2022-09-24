import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-list',
  templateUrl: './empty-list.component.html',
  styleUrls: ['./empty-list.component.css']
})
export class EmptyListComponent implements OnInit {
  displayedColumns: string[] = ['demo-id',
   'demo-name', 'demo-age', 'demo-cpf',
    'demo-edit-button', 'demo-remove-button'];

  constructor() { }

  ngOnInit(): void {
  }

}
