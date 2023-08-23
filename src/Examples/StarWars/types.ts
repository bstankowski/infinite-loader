export interface Person {
    birth_year: string;
    created: Date;
    edited: Date;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string[];
}

export interface PeopleResponse {
    count: number;
    next: string | null; // E.g. https://swapi.dev/api/people/?page=2
    previous: string | null;
    results: Person[];
}
