import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { PokemonComponent } from "./pages/pokemon/pokemon.component";
import { EvolutionsComponent } from "./pages/pokemon/tabs/evolutions/evolutions.component";
import { GeneralComponent } from "./pages/pokemon/tabs/general/general.component";
import { StatsComponent } from "./pages/pokemon/tabs/stats/stats.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "pokemon/:id",
    component: PokemonComponent,
    children: [
      {
        path: "general",
        component: GeneralComponent,
      },
      {
        path: "stats",
        component: StatsComponent,
      },
      {
        path: "evolutions",
        component: EvolutionsComponent,
      },
      {
        path: "evolutions",
        component: EvolutionsComponent,
      },
      {
        path: "",
        redirectTo: "general",
        pathMatch: "full"
      },
    ],
  },
  {
    path: "not-found",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "not-found"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
