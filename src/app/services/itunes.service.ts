import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class iTunesService {
  private limit: number = 5;
  private url: string = `
    https://itunes.apple.com/search
      ?term=%QUERY%
      &entity=musicTrack
      &limit=5
  `;

  constructor(private httpClient: HttpClient) { }

  public getData(query: string): string {
    const url: string = this.url
      .replace('%QUERY%', encodeURI(query))
      .replace(/\s/g, '');
    return url;
  }
}
