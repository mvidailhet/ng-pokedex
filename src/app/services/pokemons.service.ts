import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private loggingService: LoggingService) { }

  pokemons: string[] = [];

  addPokemon(name: string) {
    this.loggingService.logItemCreated(name);
    this.pokemons.push(name);
  }

  removePokemon(name: string) {
    this.loggingService.logItemRemoved(name);
    this.pokemons.splice(this.pokemons.indexOf(name), 1);
  }
}
