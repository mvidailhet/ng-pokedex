import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  nbCaught = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
