import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../../../types';
import { SongifyPipe } from '../../../pipes/songify.pipe';
import { ShortenPipe } from '../../../pipes/shorten.pipe';

@Component({
  selector: 'tunes-song',
  standalone: true,
  imports: [CommonModule, SongifyPipe, ShortenPipe],
  templateUrl: './tunes-song.component.html',
  styleUrl: './tunes-song.component.scss',
})
export class TunesSongComponent implements OnInit {
  @Input() song!: Song;

  constructor() {}

  ngOnInit(): void {}
}
