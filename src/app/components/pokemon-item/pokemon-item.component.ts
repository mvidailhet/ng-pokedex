import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pokedex-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input('pokemonName') name = '';
  @Output() removeClick = new EventEmitter<string>();

  nbCaught = Math.round(Math.random() * 10);

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveClick() {
    this.removeClick.emit(this.name);
  }

}
