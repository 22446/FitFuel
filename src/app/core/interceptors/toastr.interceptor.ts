import { catchError, throwError } from 'rxjs';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const toastrInterceptor: HttpInterceptorFn = (req, next) => {
  const _ToastrService = inject(ToastrService)
  return next(req).pipe(catchError((err)=>{
    _ToastrService.error(err.error.error)
    return throwError(()=>err)
  }))
};
