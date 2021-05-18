import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon, PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {
  pokemon: Pokemon | undefined;
  paramsSubscription: Subscription | undefined;
  queryParamsSubscription: Subscription | undefined;
  fragmentSubscription: Subscription | undefined;

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonsService) { }

  ngOnDestroy(): void {
    // Pas besoin de faire ça, Angular s'en occupe pour nous.
    // Mais pour l'exemple, on montre comment faire
    // Si cela n'est pas fait, la subscription reste dans la mémoire et crée une fuite mémoire
    this.paramsSubscription?.unsubscribe();
  }

  // Expliquer pourquoi j'ai dû mettre une arrow function (this ne marchait pas)
  handleRouteParams = (params: Params) => {
    const pokemonId = params["id"];
    this.pokemon = {
      id: pokemonId,
      name: this.pokemonService.pokemons[pokemonId].name,
    }
  }

  handleQueryParams(queryParams: Params) {
    console.log("query parameters !");
    console.log(queryParams);
  }

  handleFragment(fragment: string) {
    console.log("fragment : " + fragment);
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe(this.handleRouteParams);
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe(this.handleQueryParams);
    this.fragmentSubscription = this.activatedRoute.fragment.subscribe(this.handleFragment);
  }

}
