import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Usuari {
  id: number;
  nom: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  // El BehaviorSubject guarda l'estat actual (null si no hi ha ningú loguejat)
  private usuariActual$ = new BehaviorSubject<Usuari | null>(null);

  estaAutenticat(): boolean {
    return this.usuariActual$.value !== null;
  }

  obtenirUsuari(): Observable<Usuari | null> {
    return this.usuariActual$.asObservable();
  }

  login(email: string, contrasenya: string): boolean {
    // Credencials de prova per al CookLab
    if (email === 'xef@cooklab.com' && contrasenya === '1234') {
      this.usuariActual$.next({ id: 1, nom: 'Xef Sergi', email });
      return true;
    }
    return false;
  }

  logout(): void {
    this.usuariActual$.next(null);
  }
}