import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongService } from '../../../services/song.service';
import { Song } from '../../../types';

@Component({
  selector: 'tunes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tunes-list.component.html',
  styleUrl: './tunes-list.component.scss',
})
export class TunesListComponent implements OnInit, OnChanges {
  songs: Song[] = [];
  @Input() newSong: string = '';

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    //this.songs = this.songService.getSongs();
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    this.songService.addSong(changes['newSong'].currentValue);
  }
}
