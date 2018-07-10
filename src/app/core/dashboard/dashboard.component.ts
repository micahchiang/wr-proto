import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [HttpService]
})
export class DashboardComponent implements OnInit {

  issues: Array<any>;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.httpService.getData().subscribe(data => {
      this.issues = data;
      console.log('received data', this.issues);
    });
  }

}
