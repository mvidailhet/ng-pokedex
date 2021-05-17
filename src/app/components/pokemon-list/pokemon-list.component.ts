import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'pokedex-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @ViewChild('nameInput') nameInputElementRef: ElementRef | undefined;
  pokemonName = '';

  pokemons: string[] = [];

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
    
  }

  onAddPokemon(element: HTMLElement) {
    console.log(this.nameInputElementRef?.nativeElement);
    console.log(element);
    this.loggingService.logItemCreated(this.pokemonName);
    this.pokemons.push(this.pokemonName);
  }

  removePokemon(pokemonName: string, index: number) {
    console.log(pokemonName + ' removed');
    this.pokemons.splice(index, 1);
  }
}
