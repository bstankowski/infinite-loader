import { PeopleResponse } from "../types";

const SW_API_URL = "https://swapi.dev/api/";

export const getStarWarsPeople = async ({ pageParam = 1 }): Promise<PeopleResponse> => {
    const response = await fetch(`${SW_API_URL}people/?page=${pageParam}`);

    /**
     * `fetch` does not throw errors by default, so we need to do it ourselves.
     * The error will be available in `error` state variable from useInfiniteQuery.
     */
    if (!response.ok) {
        throw new Error("Unable to load data.");
    }

    return response.json();
};
