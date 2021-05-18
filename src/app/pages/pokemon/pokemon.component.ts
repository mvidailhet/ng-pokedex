import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon, PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const pokemonId = params["id"];
      this.pokemon = {
        id: pokemonId,
        name: this.pokemonService.pokemons[pokemonId].name,
      }
    });
  }

}
