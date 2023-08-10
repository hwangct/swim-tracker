import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  url: string = environment.restUrl;

  /* CRUD operations for users */
  getUsers() {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  addUser(updatedBody: User) {
    return this.http.post<User[]>(`${this.url}/users`, updatedBody);
  }

  editUser(userName: string, updatedBody: User) {
    return this.http.put<User>(`${this.url}/users/${userName}`, updatedBody);
  }

  deleteUser(userName: string) {
    return this.http.delete(`${this.url}/users/${userName}`);
  }
}
