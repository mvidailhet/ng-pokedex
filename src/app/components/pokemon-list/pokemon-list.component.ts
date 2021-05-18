import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { PokemonsService, Pokemon } from "src/app/services/pokemons.service";

@Component({
  selector: "pokedex-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent implements OnInit {
  @ViewChild("nameInput") nameInputElementRef: ElementRef | undefined;
  pokemonName = "";
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonsService, private router: Router) {
    this.pokemons = this.pokemonService.pokemons;
  }

  ngOnInit(): void {}

  onAddPokemon(element: HTMLElement) {
    this.pokemonService.addPokemon(this.pokemonName);
  }

  goToPokemonPage(index: number) {
    this.router.navigate(["/pokemon/" + index]);
  }
}
