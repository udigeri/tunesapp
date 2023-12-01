import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { RouterModule} from '@angular/router';

@Component({
  selector: 'the-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './the-navigation.component.html',
  styleUrl: './the-navigation.component.scss'
})
export class TheNavigationComponent {

}
