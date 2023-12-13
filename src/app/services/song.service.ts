import { Injectable } from '@angular/core';
import { iTunesService } from './itunes.service';
import { Song } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private songs: Song[] = [
    { id: 1, artist: 'Metallica', album: 'Unforgiven' },
    { id: 2, artist: 'One Republic', album: 'Oh My My' },
    { id: 3, artist: 'U2', album: 'Live' },
  ];

  constructor(private iTunes: iTunesService) {}

  public getSongs(query: string) {
    if (query) console.log(this.iTunes.getData(query));
  }

  public addSong(name: string): void {
    this.songs.push({
      id: Math.max(...this.songs.map((s) => s.id)) + 1,
      artist: name + ' prilepok',
      album: name,
    });
  }
}
