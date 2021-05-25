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

  private findPokemonIndex(name: string): number {
    return this.pokemons.findIndex((pokemon) => pokemon.name === name);
  }

  removePokemon(name: string) {
    this.loggingService.logItemRemoved(name);
    this.pokemons.splice(this.findPokemonIndex(name), 1);
  }
}
