import { Routes } from '@angular/router';

// views
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { TunesComponent } from './views/tunes/tunes.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'tunes', component: TunesComponent}
];
