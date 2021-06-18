import { PokemonTypeFilterPipe } from './pokemon-type-filter.pipe';

describe('PokemonTypeFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonTypeFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
