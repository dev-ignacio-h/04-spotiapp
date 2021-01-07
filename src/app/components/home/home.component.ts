// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  // paises: any[] = [];
  constructor(private spotify: SpotifyService /* private http: HttpClient */) {
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
    });
    // console.log('constructor de home hecho');
    // this.http
    //   .get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe((data: any) => {
    //     this.paises = data;
    //     console.log(data);
    //   });
  }
}
