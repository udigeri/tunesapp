import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SongService } from '../../../services/song.service';
import { Song } from '../../../types';

@Component({
  selector: 'tunes-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tunes-search.component.html',
  styleUrl: './tunes-search.component.scss'
})
export class TunesSearchComponent implements OnInit{

  constructor(private songService: SongService) {}

  ngOnInit(): void {}

  getMusic(query: string): void {
    this.songService.addSong(query);
  }

}
