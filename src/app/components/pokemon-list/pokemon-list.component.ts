import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  allowNewPokemon = false;
  pokemonAdditionStatus = 'No Pokemon was created';
  pokemonName = '';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewPokemon = true;
    }, 5000);
  }

  onAddPokemon() {
    this.pokemonAdditionStatus = 'Pokemon was added !';
  }

  onUpdatePokemonName(event: Event) {
    console.log(event);
    const inputElement = event.target as HTMLInputElement;
    this.pokemonName = inputElement.value;
  }

}
