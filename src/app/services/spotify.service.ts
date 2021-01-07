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

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCH4OKO6Py4oJXkpt4CIOfR6yxKEzMlQ7LaT5BUryjXc-5Js7qp7bLTJoX21aCVZX1obKCvd6Av-n8N1mE',
    });
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases?limit=21', {
        headers,
      })
      .pipe(map((data) => data['albums'].items));
  }

  getArtista(term) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCH4OKO6Py4oJXkpt4CIOfR6yxKEzMlQ7LaT5BUryjXc-5Js7qp7bLTJoX21aCVZX1obKCvd6Av-n8N1mE',
    });
    return this.http
      .get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, {
        headers,
      })
      .pipe(map((data) => data['artists'].items));
  }
}
