import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBYRXf_pISCvzE1zrMqG-6pkEt6UtP7nPXVH3ddON9h8xXUGeTN0VtQ5psVI1MbbBSCynpn8WEi8b0K-xg',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    const query = 'browse/new-releases?limit=21';
    return this.getQuery(query).pipe(map((data) => data['albums'].items));
  }

  getArtistas(term) {
    const query = `search?q=${term}&type=artist&limit=15`;
    return this.getQuery(query).pipe(map((data) => data['artists'].items));
  }

  getArtista(id: string) {
    const query = `artists/${id}`;
    return this.getQuery(query);
    // .pipe(map((data) => data['artists'].items));
  }

  getTopTracks(id: string) {
    const query = `artists/${id}/top-tracks?country=us`;
    return this.getQuery(query).pipe(map((data) => data['tracks']));
  }
}
