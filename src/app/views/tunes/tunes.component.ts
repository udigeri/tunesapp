import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TunesSearchComponent } from '../../components/tunes/tunes-search/tunes-search.component';
import { TunesListComponent } from '../../components/tunes/tunes-list/tunes-list.component';
import { TunesSongComponent } from '../../components/tunes/tunes-song/tunes-song.component';

@Component({
  selector: 'app-tunes',
  standalone: true,
  imports: [
    CommonModule,
    TunesSearchComponent,
    TunesListComponent,
    TunesSongComponent,
  ],
  // templateUrl: './tunes.component.html',
  styleUrl: './tunes.component.scss',
  template: `
    <div class="tunes">
      <h3>{{ title }}</h3>
      <tunes-search (newSongHaveArrived)="newSongCame($event)"></tunes-search>
      <tunes-list></tunes-list>
      <p>{{ newSong }}</p>
    </div>
  `,
})
export class TunesComponent {
  title: string = 'Tunes';
  newSong: string = '';

  newSongCame(value: string): void {
    this.newSong = value;
    console.log(value);
  }
}
