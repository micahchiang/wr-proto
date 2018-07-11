import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';
import { ErrorHandlingService } from '../../shared/services/errorhandling.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  issues: Array<any>;

  constructor(
    private dashboardService: DashboardService,
    private errorHandlingService: ErrorHandlingService
  ) { }

  ngOnInit() {
    this.dashboardService.getData().then(() => {
      this.issues = this.dashboardService.getIssues();
    }).catch(e => {
      this.errorHandlingService.showError(e);
    });
  }

  filterQuery(category: string) {
    this.issues = this.dashboardService.filterIssues(category);
  }

}
