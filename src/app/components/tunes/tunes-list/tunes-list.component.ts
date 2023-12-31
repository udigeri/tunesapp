import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongService } from '../../../services/song.service';
import { Song } from '../../../types';
import { TunesSongComponent } from '../tunes-song/tunes-song.component';

@Component({
  selector: 'tunes-list',
  standalone: true,
  imports: [CommonModule, TunesSongComponent],
  templateUrl: './tunes-list.component.html',
  styleUrl: './tunes-list.component.scss',
})
export class TunesListComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songService.newSongsHaveArrived.subscribe((data: Song[]) => {
      this.songs = data;
    });
  }
}
