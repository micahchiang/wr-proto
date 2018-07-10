import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AppHeaderService {

  constructor(private router: Router) { }

  getPageTitle(): Observable<any> {
    return new Observable(observer => {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          observer.next(event.url);
        }
      });
    });
  }
}

