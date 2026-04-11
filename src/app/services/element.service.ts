import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; 
import { ElementCataleg, ElementApiResponse } from '../models/element.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private http = inject(HttpClient);
  

  private readonly url = `${environment.apiUrl}/elements`;


  private _elements = signal<ElementCataleg[]>([]);
  private _carregant = signal<boolean>(false);
  private _error = signal<string | null>(null);

  readonly elements = this._elements.asReadonly();
  readonly carregant = this._carregant.asReadonly();
  readonly error = this._error.asReadonly();


  obtenirPopulars(): void {
    this._carregant.set(true);
    this._error.set(null);

 
    this.http.get<ElementApiResponse[]>(this.url).pipe(
      map(res => adaptarElementsApi(res)), 
      tap(elementsAdaptats => {
        this._elements.set(elementsAdaptats);
        this._carregant.set(false);
      }),
      catchError(() => {
        this._error.set("No s'han pogut carregar els elements del catàleg");
        this._carregant.set(false);
        return of([]);
      })
    ).subscribe();
  }
}