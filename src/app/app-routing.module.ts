import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { EvolutionsComponent } from './pages/pokemon/tabs/evolutions/evolutions.component';
import { GeneralComponent } from './pages/pokemon/tabs/general/general.component';
import { StatsComponent } from './pages/pokemon/tabs/stats/stats.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pokemon/:id",
    component: PokemonComponent,
    children: [{
      path: "general",
      component: GeneralComponent
    }, {
      path: "stats",
      component: StatsComponent
    }, {
      path: "evolutions",
      component: EvolutionsComponent
    }, {
      path: "evolutions",
      component: EvolutionsComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
