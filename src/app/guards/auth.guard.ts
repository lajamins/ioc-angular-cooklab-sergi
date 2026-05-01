import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.estaAutenticat()) {
    return true; // Deixem passar
  }

  // Si no està autenticat, el enviem al login i guardem on volia anar (returnUrl)
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};