import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { PokemonsService, Pokemon } from "src/app/services/pokemons.service";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "pokedex-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent implements OnInit {
  @ViewChild("nameInput") nameInputElementRef: ElementRef | undefined;
  pokemonName = "";
  pokemons: Pokemon[] = [];
  apiPokemons: Pokemon[] = [];
  isFetching = false;
  apiUrl =
    "https://ng-pokedex-4b90d-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(
    private pokemonService: PokemonsService,
    private router: Router,
    private apiService: ApiService,
  ) {
    this.pokemons = this.pokemonService.pokemons;
  }

  ngOnInit(): void {}

  onPokemonNameType() {
    this.pokemonService.isEditingPokemon = this.pokemonName !== "";
  }

  onAddPokemon(element: HTMLElement) {
    this.apiService.postPokemon(this.pokemonName)
      .subscribe((responseData) => {
        console.log(responseData);
        this.pokemonService.addPokemon(this.pokemonName);
        this.pokemonName = "";
        this.pokemonService.isEditingPokemon = false;
      });
  }

  fetchPokemons() {
    this.isFetching = true;
    this.apiPokemons = [];
    setTimeout(() => {
      this.apiService.fetchPokemon()
        .subscribe((apiPokemons: Pokemon[]) => {
          this.apiPokemons = [...this.apiPokemons, ...apiPokemons];
          console.log(this.apiPokemons);
          this.isFetching = false;
        });
    }, 1000);
  }

  goToPokemonPage(index: number) {
    this.router.navigate(["/pokemon", index], {
      queryParams: { allowEdit: 1 },
      fragment: "test",
    });
  }
}
