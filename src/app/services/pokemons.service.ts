import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

export enum PokemonTypeEnum {
  FIRE = "FIRE",
  GRASS = "GRASS",
  WATER = "WATER",
  POISON = "POISON",
}
export interface Pokemon {
  id: string;
  name: string;
  type: PokemonTypeEnum;
}
@Injectable({
  providedIn: "root",
})
export class PokemonsService {
  constructor(private loggingService: LoggingService) {}

  isEditingPokemon = false;
  pokemons: Pokemon[] = [];

  addPokemon(id: string, name: string, type: PokemonTypeEnum) {
    this.loggingService.logItemCreated(name);
    this.pokemons.push({
      id,
      name,
      type,
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
