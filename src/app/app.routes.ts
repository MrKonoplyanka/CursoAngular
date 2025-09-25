import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { DragonballComponent } from './pages/dragonball/dragonball';

export const routes: Routes = [

  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonballComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
