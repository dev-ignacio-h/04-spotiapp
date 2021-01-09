import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {}
  buscar(term: string) {
    if (term.length) {
      this.loading = true;
      this.spotify.getArtistas(term).subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      });
    }
  }
}
