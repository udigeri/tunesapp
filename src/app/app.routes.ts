import { Routes } from '@angular/router';

// views
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { TunesComponent } from './views/tunes/tunes.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'tunes', component: TunesComponent},
    {path: '**', component: PageNotFoundComponent}
];
