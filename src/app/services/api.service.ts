import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Pokemon, PokemonTypeEnum } from "./pokemons.service";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  apiUrl =
    "https://ng-pokedex-4b90d-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http: HttpClient) {}

  postPokemon(name: string, type: PokemonTypeEnum): Observable<{ name: string, type:  PokemonTypeEnum}> {
    return this.http.post<Pokemon>(`${this.apiUrl}/pokemons.json`, {
      name,
      type
    });
  }

  deletePokemon(id: string) {
    return this.http.delete(`${this.apiUrl}/pokemons/${id}.json`);
  }

  fetchPokemon(): Observable<Pokemon[]> {
    return this.http
      .get<{ [key: string]: { name: string, type: PokemonTypeEnum } }>(`${this.apiUrl}/pokemons.json`)
      .pipe(
        map((responseData) => {
          if (!responseData) return [];
          return Object.entries(responseData).map(([id, apiPokemon]) => {
            return <Pokemon>{
              id,
              name: apiPokemon.name,
              type: apiPokemon.type,
            };
          });
        })
      );
  }
}
