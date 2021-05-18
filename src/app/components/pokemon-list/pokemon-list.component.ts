import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { LoggingService } from "src/app/services/logging.service";
import { PokemonsService } from "src/app/services/pokemons.service";

@Component({
  selector: "pokedex-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent implements OnInit {
  @ViewChild("nameInput") nameInputElementRef: ElementRef | undefined;
  pokemonName = "";
  pokemons: string[] = [];

  constructor(
    private pokemonService: PokemonsService
  ) {
    this.pokemons = this.pokemonService.pokemons;
  }

  ngOnInit(): void {}

  onAddPokemon(element: HTMLElement) {
    this.pokemonService.addPokemon(this.pokemonName);
  }
}
