import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
 
  const role = sessionStorage.getItem('role'); 
  

  if (role === 'admin') {
    return true;
  }

 
  const router = inject(Router);
  router.navigate(['/login']); 
  return false; 
};
