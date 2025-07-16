import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API_URL = 'https://api-server.illpeoplemusic.com/api/v2';

  constructor(private http: HttpClient) {}

  getTrendingPlaylists(pageCount: number): Observable<any> {
    const url_key = this.API_URL + `/playlist/oneScroll/${pageCount}`;
    return this.http.get<any>(url_key);
  }
}
