import { Component, Input } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Pokemon, PokemonsService } from "src/app/services/pokemons.service";

@Component({
  selector: "pokedex-pokemon-item",
  templateUrl: "./pokemon-item.component.html",
  styleUrls: ["./pokemon-item.component.scss"],
})
export class PokemonItemComponent {
  @Input() pokemon: Pokemon | undefined;

  nbCaught = Math.round(Math.random() * 10);

  constructor(
    private pokemonService: PokemonsService,
    private apiService: ApiService
  ) {}

  onRemoveClick() {
    if (!this.pokemon) return;
    this.apiService.deletePokemon(this.pokemon.id).subscribe(() => {
      if (!this.pokemon) return;
      this.pokemonService.removePokemon(this.pokemon);
    });
  }
}
