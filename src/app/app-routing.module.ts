import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MapsComponent } from './views/maps/maps.component';
import { NpcsComponent } from './views/npcs/npcs.component';
import { QuestsComponent } from './views/quests/quests.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'POC-TTADS'
  },
  {
    path: 'npcs',
    component: NpcsComponent,
    title: 'NPCs'
  },
  {
    path: 'maps',
    component: MapsComponent,
    title: 'Mapas'
  },
  {
    path: 'quests',
    component: QuestsComponent,
    title: 'Misiones'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
