import { api, type ApiListResult } from "../api";
import { writable } from "svelte/store";

export interface Pokemon {
    name: string;
    url: string;
}

export const pokemon = writable<Array<Pokemon>>();

export const fetchPokemon = async (params?: { limit?: number, offset?: number; }) => {
    const { limit, offset } = params ?? {};
    const url = `/pokemon?limit=${limit ?? 20}&offset=${offset ?? 0}`;
    const { results } = await api.get<ApiListResult<Pokemon>>(url);
    pokemon.set(results);
}