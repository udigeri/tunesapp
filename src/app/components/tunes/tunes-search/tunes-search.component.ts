import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SongService } from '../../../services/song.service';
import { debounce } from 'lodash-es';

@Component({
  selector: 'tunes-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tunes-search.component.html',
  styleUrl: './tunes-search.component.scss',
})
export class TunesSearchComponent implements OnInit {
  @Output() newSongHaveArrived = new EventEmitter<string>();

  constructor(private songService: SongService) {}

  ngOnInit(): void {}

  getMusic(query: string): void {
    this.songService.getSongs(query);
  }

  search = debounce((query: string): void => {
    this.getMusic(query)
  }, 500)
}
