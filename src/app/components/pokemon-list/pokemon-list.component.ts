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
  isFetching = false;
  apiUrl =
    "https://ng-pokedex-4b90d-default-rtdb.europe-west1.firebasedatabase.app/";
  error: string | undefined;

  constructor(
    private pokemonService: PokemonsService,
    private router: Router,
    private apiService: ApiService,
  ) {
    this.pokemons = this.pokemonService.pokemons;
  }

  ngOnInit(): void {
    this.fetchPokemons();
  }

  onPokemonNameType() {
    this.pokemonService.isEditingPokemon = this.pokemonName !== "";
  }

  onAddPokemon(element: HTMLElement) {
    this.apiService.postPokemon(this.pokemonName)
      .subscribe((responseData) => {
        this.pokemonService.addPokemon(responseData.name, this.pokemonName);
        this.pokemonName = "";
        this.pokemonService.isEditingPokemon = false;
      });
  }

  fetchPokemons() {
    this.isFetching = true;
    setTimeout(() => {
      this.apiService.fetchPokemon()
        .subscribe((apiPokemons: Pokemon[]) => {
          console.log(apiPokemons);
          this.pokemonService.pokemons = apiPokemons;
          this.pokemons = this.pokemonService.pokemons;
          this.isFetching = false;
        }, error => {
          console.error(error);
          this.error = error.message;
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
