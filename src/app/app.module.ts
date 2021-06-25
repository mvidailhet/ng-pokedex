import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GeneralComponent } from './pages/pokemon/tabs/general/general.component';
import { StatsComponent } from './pages/pokemon/tabs/stats/stats.component';
import { EvolutionsComponent } from './pages/pokemon/tabs/evolutions/evolutions.component';
import { ErrorComponent } from './pages/error/error.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { PokemonTypeFilterPipe } from './pipes/pokemon-type-filter.pipe';
import { CreateUserTemplateDrivenComponent } from './pages/create-user-template-driven/create-user-template-driven.component';
import { CreateUserModelDrivenComponent } from './pages/create-user-model-driven/create-user-model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    PokemonListComponent,
    BasicHighlightDirective,
    HomeComponent,
    PokemonComponent,
    GeneralComponent,
    StatsComponent,
    EvolutionsComponent,
    ErrorComponent,
    ShortenPipe,
    PokemonTypeFilterPipe,
    CreateUserTemplateDrivenComponent,
    CreateUserModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
