import { Component, OnInit } from '@angular/core';

import { HttpService } from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  title = 'Security Dashboard';
  data;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.httpService.getData().subscribe(data => {
      this.data = data;
      console.log('received data', this.data);
    });
  }
}
