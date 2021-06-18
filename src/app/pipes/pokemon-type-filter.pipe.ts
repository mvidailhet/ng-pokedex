import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon, PokemonTypeEnum } from '../services/pokemons.service';

@Pipe({
  name: 'pokemonTypeFilter',
  pure: false,
})
export class PokemonTypeFilterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], type: PokemonTypeEnum | undefined | string): Pokemon[] {
    if (!pokemons || !type || type === "") return pokemons;
    return pokemons.filter((pokemon) => pokemon.type === type);
  }

}
