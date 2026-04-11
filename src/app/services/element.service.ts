import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; 
import { Recepta, ReceptaApiResponse } from '../models/recepta.model';
import { adaptarReceptesApi } from '../adaptadors/recepta.adaptador';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/receptes`;

  // Canviem el tipus de dades dels Signals a <Recepta[]>
  private _elements = signal<Recepta[]>([]);
  private _carregant = signal<boolean>(false);
  private _error = signal<string | null>(null);

  readonly elements = this._elements.asReadonly();
  readonly carregant = this._carregant.asReadonly();
  readonly error = this._error.asReadonly();

  obtenirPopulars(): void {
    this._carregant.set(true);
    this._error.set(null);

    this.http.get<ReceptaApiResponse[]>(this.url).pipe(
      map(res => adaptarReceptesApi(res)),
      tap(receptes => {
        this._elements.set(receptes);
        this._carregant.set(false);
      }),
      catchError(() => {
        this._error.set('Error en carregar les receptes');
        this._carregant.set(false);
        return of([]);
      })
    ).subscribe();
  }
}