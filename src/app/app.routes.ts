import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MarketsComponent } from './pages/markets/markets.component';
import { Mp3TaggerComponent } from './pages/mp3-tagger/mp3-tagger.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SteganographyComponent } from './pages/steganography/steganography.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Moongoose Den' },
  { path: 'markets', component: MarketsComponent, title: 'Markets' },
  { path: 'mp3-tagger', component: Mp3TaggerComponent, title: 'MP3 Tagger' },
  { path: 'steganography', component: SteganographyComponent, title: 'Steganography' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
