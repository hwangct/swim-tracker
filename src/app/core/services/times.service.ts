import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Time } from '../models/time';

@Injectable({
  providedIn: 'root',
})
export class TimesService {
  constructor(private http: HttpClient) {}

  url: string = environment.restUrl;

  /* CRUD operations for users */
  getTimes() {
    return this.http.get<Time[]>(`${this.url}/times`);
  }

  addTime(updatedBody: Time) {
    return this.http.post<Time[]>(`${this.url}/times`, updatedBody);
  }

  editTime(userName: string, updatedBody: Time) {
    return this.http.put<Time>(`${this.url}/times/${userName}`, updatedBody);
  }

  deleteTime(userName: string) {
    return this.http.delete(`${this.url}/times/${userName}`);
  }
}
