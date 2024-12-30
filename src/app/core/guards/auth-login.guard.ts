import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authLoginGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router); 
  const platformID = inject(PLATFORM_ID)
  if(isPlatformBrowser(platformID)){
    if (localStorage.getItem('userToken') !== null) {
      return true;
    } else {
      _Router.navigate(['/login']); 
      return false; 
    } 
  }
  return false; 
};