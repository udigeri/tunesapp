import { Injectable, Output, EventEmitter } from '@angular/core';
import { iTunesService } from './itunes.service';
import { Song, SongFromITunes } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  @Output() newSongsHaveArrived: EventEmitter<any> = new EventEmitter();
  private songs: Song[] = [];
  // [
  //   { id: 1, artist: 'Metallica', album: 'Unforgiven' },
  //   { id: 2, artist: 'One Republic', album: 'Oh My My' },
  //   { id: 3, artist: 'U2', album: 'Live' },
  // ];

  constructor(private iTunes: iTunesService) {}

  public getSongs(query: string) {
    if (query)
      this.iTunes.getData(query).subscribe(
        //next
        (data: any) => {
          this.songs = data.results
            .filter((song: SongFromITunes) => song.kind === 'song')
            .map((song: SongFromITunes) => this.extractData(song));

          this.newSongsHaveArrived.emit(this.songs);
        },

        (error: any) => console.error(error), //error
        () => console.info("We're done") //complete
      );
  }

  /**
   * extractData
   */
  public extractData({ 
    trackId: id, 
    artistName: artist,
    previewUrl: audioFile,
    artworkUrl100: artwork,
    trackName: title,
    collectionName: album
  }: SongFromITunes): Song {
    return { id, artist, audioFile, artwork, title, album };
  }
}
