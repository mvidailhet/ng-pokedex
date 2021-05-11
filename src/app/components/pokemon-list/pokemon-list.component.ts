import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pokedex-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @ViewChild('nameInput') nameInputElementRef: ElementRef | undefined;
  pokemonName = '';

  pokemons: string[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  onAddPokemon(element: HTMLElement) {
    console.log(this.nameInputElementRef?.nativeElement);
    console.log(element);
    this.pokemons.push(this.pokemonName);
  }

  removePokemon(pokemonName: string, index: number) {
    console.log(pokemonName + ' removed');
    this.pokemons.splice(index, 1);
  }
}
