import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandlingService {

  constructor(private toastr: ToastrService) { }

  showError(e) {
    this.toastr.error(e, 'Error!');
  }
}
