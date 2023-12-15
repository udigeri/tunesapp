import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Views
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { TunesComponent } from './views/tunes/tunes.component';

// Components
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';
import { TunesSongComponent } from './components/tunes/tunes-song/tunes-song.component';
import { SongifyPipe } from './pipes/songify.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    TunesComponent,
    TheNavigationComponent,
    TunesSongComponent,
    SongifyPipe,
    ShortenPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tunes';
}
