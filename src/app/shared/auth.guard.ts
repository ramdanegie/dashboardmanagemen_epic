import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
    if (localStorage.getItem('pegawai')) {
      // logged in so return true
   
      // var authorization = "";
      var authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiJ9.QKWR1t8OsaBbi2-lP0oIM2aPcsA3Fer02qbqLe5w_GrjIVphuSipA5W_xXBQ2Hs9tT_hwvHGOf7LOgek3KLyAA';
      var arr = document.cookie.split(';')
      for (var i = 0; i < arr.length; i++) {
        var element = arr[i].split('=');
        if (element[0].indexOf('authorization') > 0) {
          authorization = element[1];
        }
      }
    
      window.localStorage.setItem('X-AUTH-TOKEN', JSON.stringify(authorization));
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    // , { queryParams: { returnUrl: state.url } });
    return false;
  }
}
