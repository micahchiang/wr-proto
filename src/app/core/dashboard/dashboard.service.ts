import { Injectable} from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { LocalStorageService } from '../../shared/services/localstorage.service';

@Injectable()
export class DashboardService {

  issues: Array<any>;
  severities = ['HIGH', 'MEDIUM', 'LOW'];

  constructor(private httpService: HttpService, private localStorageService: LocalStorageService) { }

  getData() {
    return new Promise((resolve, reject) => {
      this.httpService.getData().subscribe(data => {
        this.localStorageService.setStorageItem('issues', data);
        this.issues = this.localStorageService.getStorageItem('issues');
        this.sortIssues('severity', this.issues); // As both a cloud admin or c-level exec, the most important thing is most urgent threats.
        resolve();
      });
    });
  }

  sortIssues(option: string, data: Array<any>) {
    if (option === 'severity') {
      data.sort((a, b) => this.severities.indexOf(a.severity) - this.severities.indexOf(b.severity));
    }
  }

  filterIssues(option: string) {
    if (option === 'all') {
      return this.issues;
    }
    // instead of changing the original copy of issues in here, created a filtered copy and return it.
    const filteredIssues = this.localStorageService.getStorageItem('issues')
          .filter(issue => {
            return issue.category === option;
          }).sort((a, b) => this.severities.indexOf(a.severity) - this.severities.indexOf(b.severity));
    return filteredIssues;
  }

  getIssues(): Array<object> {
    return this.issues;
  }
}
