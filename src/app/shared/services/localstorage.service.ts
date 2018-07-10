import { Injectable } from '@angular/core';
import { WindowRef } from './window-ref';

@Injectable()
export class LocalStorageService {

  storage: any;

  constructor(private window: WindowRef) {
    this.storage = this.window.nativeWindow.localStorage;
  }

  setStorageItem(key: string, data: Array<any>) {
    this.storage.setItem('issues', JSON.stringify(data));
  }

  getStorageItem(key: string): any {
    return JSON.parse(this.storage.getItem(key));
  }
}
