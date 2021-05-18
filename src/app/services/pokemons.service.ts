import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

export interface Pokemon {
  id: number;
  name: string;
}
@Injectable({
  providedIn: "root",
})
export class PokemonsService {
  constructor(private loggingService: LoggingService) {}

  pokemons: Pokemon[] = [];

  addPokemon(name: string) {
    this.loggingService.logItemCreated(name);
    this.pokemons.push({
      id: this.pokemons.length,
      name: name,
    });
  }

  private findPokemonIndex(name: string): number {
    return this.pokemons.findIndex((pokemon) => pokemon.name === name);
  }

  removePokemon(name: string) {
    this.loggingService.logItemRemoved(name);
    this.pokemons.splice(this.findPokemonIndex(name), 1);
  }
}
