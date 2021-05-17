import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  pokemons: string[] = [];

  addPokemon(name: string) {
    this.pokemons.push(name);
  }

  removePokemon(name: string) {
    this.pokemons.splice(this.pokemons.indexOf(name), 1);
  }
}
