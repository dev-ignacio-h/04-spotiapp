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
        'Bearer BQCeZBgwZrHDBSto96Jf31z7pDqmUbpnbs4mM9gf7c1lOn4VCweh6oRfISYsB450thwVjVyA7p0n1ppLShI',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    const query = 'browse/new-releases?limit=21';
    return this.getQuery(query).pipe(map((data) => data['albums'].items));
  }

  getArtista(term) {
    const query = `search?q=${term}&type=artist&limit=15`;
    return this.getQuery(query).pipe(map((data) => data['artists'].items));
  }
}
