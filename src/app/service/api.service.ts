import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API_URL =
    'https://api-server.illpeoplemusic.com/api/v2/playlist/trending';

  constructor(private http: HttpClient) {}

  getTrendingPlaylists(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
