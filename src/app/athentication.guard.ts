import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AthenticationGuard implements CanActivate {
  constructor(private router:Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var localstorageItem = localStorage.getItem("role");
      if(localstorageItem){
        if(localstorageItem == "admin"){
          return true;
        }
        else{
          return this.router.parseUrl('/login'); // Redirect to login page
          return false;
        }
    }
    return this.router.parseUrl('/login'); // Redirect to login page
    return false;
  
  }
  
}
