import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artistas: any[] = [];
  constructor(private spotify: SpotifyService) {}
  buscar(term: string) {
    // console.log(term);
    this.spotify.getArtista(term).subscribe((data: any) => {
      // console.log(data);
      this.artistas = data;
    });
  }
}