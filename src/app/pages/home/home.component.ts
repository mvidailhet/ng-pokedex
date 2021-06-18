import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/prevent-pokemon-form-leave.guard';
import { AuthService } from 'src/app/services/auth.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, CanComponentDeactivate {
  loggedIn = false;

  username = "Michel";

  constructor(public authService: AuthService, private pokemonService: PokemonsService) { }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.pokemonService.isEditingPokemon) return true;
    return confirm("Vous voulez vraiment quitter la page sans finir la création du pokémon ?");
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
