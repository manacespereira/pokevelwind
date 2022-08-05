import { api, type ApiListResult } from "../api";
import { writable } from "svelte/store";

export interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}

export const pokemon = writable<Array<Pokemon>>();

export const fetchPokemon = async (params?: { limit?: number, offset?: number; }) => {
    const { limit, offset } = params ?? {};
    const url = `/pokemon?limit=${limit ?? 20}&offset=${offset ?? 0}`;
    const { results } = await api.get<ApiListResult<Pokemon>>(url);

    pokemon.set(results.map((p, i) => ({ ...p, id: i + 1 })));
}

export const fetchPoke = async (id: number) => {
    const url = `/pokemon/${id}`;
    const result = await api.get<Poke>(url);
    console.dir(result);
    return result;
}

export interface Poke {
    id: number;
    name: string;
    abilities: Ability[];
    forms: Species[];
    order: number;
    past_types: any[];
    species: Species;
    sprites: Sprites;
    types: Type[];
}

export interface Ability {
    ability: Species;
    is_hidden: boolean;
    slot: number;
}

export interface Species {
    name: string;
    url: string;
}

export interface Sprites {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    animated?: Sprites;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Species;
}

export interface Type {
    slot: number;
    type: Species;
}
