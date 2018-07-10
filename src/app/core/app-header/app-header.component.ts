import { Component, OnInit } from '@angular/core';
import { AppHeaderService} from './app-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  providers: [AppHeaderService]
})
export class AppHeaderComponent implements OnInit {

  pageTitle: string;

  constructor(private headerService: AppHeaderService) { }

  ngOnInit() {
    this.headerService.getPageTitle().subscribe(title => {
      switch (title) {
        case '/': {
          this.pageTitle = 'AuditWolf - Security Dashboard';
          break;
        }
        case '/profile': {
          this.pageTitle = 'AuditWolf - Profile';
          break;
        }
        default: {
          this.pageTitle = 'AuditWolf - Security Dashboard';
          break;
        }
      }
    });
  }
}
