import { Injectable } from '@angular/core';
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

  constructor() {}

  public getSongs(): Song[] {
    return this.songs;
  }

  public addSong(name: string): void {
    this.songs.push({
      id: Math.max(...this.songs.map((s) => s.id)) + 1,
      artist: name + 'daco',
      album: name,
    });
  }
}
