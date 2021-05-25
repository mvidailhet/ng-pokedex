import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

export interface Pokemon {
  id: string;
  name: string;
}
@Injectable({
  providedIn: "root",
})
export class PokemonsService {
  constructor(private loggingService: LoggingService) {}

  isEditingPokemon = false;
  pokemons: Pokemon[] = [];

  addPokemon(id: string, name: string) {
    this.loggingService.logItemCreated(name);
    this.pokemons.push({
      id,
      name,
    });
  }

  private findPokemonIndex(id: string): number {
    return this.pokemons.findIndex((pokemon) => pokemon.id === id);
  }

  removePokemon(pokemon: Pokemon) {
    this.loggingService.logItemRemoved(pokemon.name);
    this.pokemons.splice(this.findPokemonIndex(pokemon.id), 1);
  }
}
