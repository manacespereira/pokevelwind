const baseUrl = 'https://pokeapi.co/api/v2';

export interface ApiListResult<T> {
    count: number;
    next?: string;
    previous?: string;
    results: Array<T>
}


export const api = {
    get: async function get<T>(url: string, init?: RequestInit): Promise<T> {
        const response = await fetch(`${baseUrl}${url}`, init);
        if (!response.ok) throw new Error('Fetch error');
        return await response.json() as T;
    }
}