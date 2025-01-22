import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const userAuthGuard: CanActivateFn = (route, state) => {
  
  const role = sessionStorage.getItem('role'); 


  if (role === 'user') {
    return true;
  }

 
  const router = inject(Router);
  router.navigate(['/login']); 
  return false; 
};
