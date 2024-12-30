import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authLoggedGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router); 
  const platformID = inject(PLATFORM_ID)
  if(isPlatformBrowser(platformID)){
    if (localStorage.getItem('userToken') !== null) {
      _Router.navigate(['/home']); 
      return false;
    } else {
      return true; 
    } 
  }
  return false; 
};