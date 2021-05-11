import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonName = '';

  pokemons: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddPokemon() {
    this.pokemons.push(this.pokemonName);
  }

  removePokemon(pokemonName: string, index: number) {
    console.log(pokemonName + ' removed');
    this.pokemons.splice(index, 1);
  }
}
