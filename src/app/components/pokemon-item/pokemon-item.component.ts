import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input('pokemonName') name = '';
  nbCaught = Math.round(Math.random() * 10);

  constructor() { }

  ngOnInit(): void {
  }

  generateBackgroundColor() {
    return this.nbCaught > 5 ? '#00dd00' : '#882222';
  }

}
