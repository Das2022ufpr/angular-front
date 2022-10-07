import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../../client/service/client.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() title = '';
  isLoogedin = false;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.clientService.isLoggedin().subscribe((isLog) => {
      this.isLoogedin = isLog;
    }); 
  }
}
