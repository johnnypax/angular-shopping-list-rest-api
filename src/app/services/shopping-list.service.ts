import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../models/ShoppingItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private apiUrl = 'http://localhost:3000/shopping-list'; // Cambia se l'API non è su localhost:3000

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getItemById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addItem(item: any): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

  updateItem(item: ShoppingItem): Observable<any> {
    return this.http.put(`${this.apiUrl}/${item.id}`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
