import { HttpClient } from "@angular/common/http";
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

  constructor(
    private pokemonService: PokemonsService,
    private router: Router,
    private http: HttpClient
  ) {
    this.pokemons = this.pokemonService.pokemons;
  }

  ngOnInit(): void {}

  onPokemonNameType() {
    this.pokemonService.isEditingPokemon = this.pokemonName !== "";
  }

  onAddPokemon(element: HTMLElement) {
    this.http
      .post(
        "https://ng-pokedex-4b90d-default-rtdb.europe-west1.firebasedatabase.app/pokemons.json",
        { name: this.pokemonName }
      )
      .subscribe((responseData) => {
        console.log(responseData);
        this.pokemonService.addPokemon(this.pokemonName);
        this.pokemonName = "";
        this.pokemonService.isEditingPokemon = false;
      });
  }

  goToPokemonPage(index: number) {
    this.router.navigate(["/pokemon", index], {
      queryParams: { allowEdit: 1 },
      fragment: "test",
    });
  }
}
