import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from "./profile";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSearchService {

  constructor(private http: HttpClient) { }

  apiSearch(name: string = ""): Observable<Profile> {
    const url = `https://api.github.com/users/${name}`;
    return this.http.get<Profile>(url);
  }
}
