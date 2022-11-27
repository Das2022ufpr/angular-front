import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  isLogged = false;

  constructor(private clientService: ClientService,
    private _snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.clientService.isClientLogged().subscribe({
      next: (newValue) => this.isLogged = newValue,
    });
  }

  onClick() {
    this.clientService.clearLocalStorage();
    this.message();
  }

  message() {
    let config = new MatSnackBarConfig();

    config.duration = 5 * 1000;
    this._snackBar.open('Cliente deslogado com sucesso!', 'Fechar', config);
  }
}
