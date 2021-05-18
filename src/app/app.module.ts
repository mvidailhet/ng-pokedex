import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    PokemonListComponent,
    BasicHighlightDirective,
    HomeComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
