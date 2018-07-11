import { Injectable} from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { SessionStorageService } from '../../shared/services/sessionstorage.service';

@Injectable()
export class DashboardService {

  issues: Array<any>;
  severities = ['HIGH', 'MEDIUM', 'LOW'];

  constructor(
    private httpService: HttpService,
    private sessionStorageService: SessionStorageService
  ) { }

  // To reduce http requests, check session storage first. If data exists, use that.
  getData() {
    return new Promise((resolve, reject) => {
      if (this.sessionStorageService.getStorageItem('issues')) {
        this.issues = this.sessionStorageService.getStorageItem(('issues'));
        this.sortIssues('severity', this.issues);
        resolve();
      } else {
        this.httpService.getData().subscribe(data => {
          this.sessionStorageService.setStorageItem('issues', data);
          this.issues = data;
          this.sortIssues('severity', this.issues);
          resolve();
        }, error => {
          reject(error);
        });
      }
    });
  }

  sortIssues(option: string, data: Array<any>) {
    if (option === 'severity') {
      data.sort((a, b) => this.severities.indexOf(a.severity) - this.severities.indexOf(b.severity));
    }
  }

  // instead of changing the original copy of issues in here, created a filtered copy and return it.
  filterIssues(option: string) {
    if (option === 'all') {
      return this.issues;
    }
    return this.sessionStorageService.getStorageItem('issues')
          .filter(issue => {
            return issue.category === option;
          }).sort((a, b) => this.severities.indexOf(a.severity) - this.severities.indexOf(b.severity));
  }

  getIssues(): Array<object> {
    return this.issues;
  }
}
