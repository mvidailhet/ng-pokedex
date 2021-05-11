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
    }, 3000);
  }

  onAddPokemon() {
    this.pokemonAdditionStatus = 'Pokemon was added : ' + this.pokemonName;
  }
}
