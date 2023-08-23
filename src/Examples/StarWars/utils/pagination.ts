import { PeopleResponse } from "../types";

/**
 * Get the number of the next page or `undefined` if there is no more data to load.
 * @param lastPage The last page loaded, containing a next page URL.
 */
export const getNextPageParam = (lastPage: PeopleResponse) => {
    if (lastPage.next) {
        const nextPageUrl = new URLSearchParams(new URL(lastPage.next).search);
        const nextPageNumber = nextPageUrl.get("page");

        if (nextPageNumber) {
            return Number(nextPageNumber);
        }
    }

    return undefined;
};

export const getPreviousPageParam = (lastPage: PeopleResponse) => {
    if (lastPage.previous) {
        const prevPageUrl = lastPage.previous
            ? new URLSearchParams(new URL(lastPage.previous).search)
            : undefined;

        if (prevPageUrl) {
            const pageNumber = prevPageUrl.get("page");

            if (pageNumber) {
                return Number(pageNumber);
            }
        }
    }

    return undefined;
};
