import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ProductService } from '../../product/service/product.service';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  @Input() client?: Client;

  constructor(
    public clientService: ClientService,
    private _snackBar: MatSnackBar, 
    ) {}

  ngOnInit(): void {
  }

  onClick(): void {
    this.clientService.removerClient(this.client!).subscribe({
      next: () => {
        this.clientService.clearLocalStorage();
        this.errorMessage('Cliente removido com sucesso!')
      },
      error: () => this.errorMessage('Erro ao remover conteúdo!'),
      complete: () => this.clientService.fetchaAllClients()
    });
  }

  errorMessage(message: string) {
    let config = new MatSnackBarConfig();

    config.duration = 5 * 1000;
    this._snackBar.open(message, 'Fechar', config);
  }
}
