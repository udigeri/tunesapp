import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TunesSearchComponent } from '../../components/tunes/tunes-search/tunes-search.component';
import { TunesListComponent } from '../../components/tunes/tunes-list/tunes-list.component';

@Component({
  selector: 'app-tunes',
  standalone: true,
  imports: [CommonModule, TunesSearchComponent, TunesListComponent],
  // templateUrl: './tunes.component.html',
  styleUrl: './tunes.component.scss',
  template: `
    <div>
      <h3>Tunes</h3>
      <tunes-search></tunes-search>
      <tunes-list></tunes-list>
    </div>
  `
})
export class TunesComponent{

}
