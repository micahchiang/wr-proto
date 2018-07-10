import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  issues: Array<any>;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getData().then(() => {
      this.issues = this.dashboardService.getIssues();
    });
  }

  filterQuery(category: string) {
    this.issues = this.dashboardService.filterIssues(category);
  }

}
