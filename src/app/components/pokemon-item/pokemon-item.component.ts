import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'pokedex-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input('pokemonName') name = '';

  nbCaught = Math.round(Math.random() * 10);

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
  }

  onRemoveClick() {
    this.pokemonService.removePokemon(this.name);
  }

}
