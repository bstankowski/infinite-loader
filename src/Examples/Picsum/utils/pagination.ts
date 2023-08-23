import { PicsumResponse } from "../types";

/**
 * Parse Link headers containing URLs to the previous and next pages.
 * https://joshgoestoflatiron.medium.com/february-10-pagination-in-a-json-server-api-with-the-link-header-dea63eb0a835
 */
interface ParsedLink {
    [rel: string]: string | undefined;
}

function parseLinkHeader(linkHeader: string): ParsedLink | undefined {
    if (!linkHeader) return undefined;

    const linkHeadersArray = linkHeader.split(", ").map((header) => header.split("; "));
    const linkHeadersMap = linkHeadersArray.map((header) => {
        const rel = header[1].replace(/"/g, "").replace("rel=", "");
        const url = header[0].slice(1, -1);

        return [rel, url];
    });

    return Object.fromEntries(linkHeadersMap);
}

/**
 * Get the number of the next page or `undefined` if there is no more data to load.
 * @param lastPage The last page loaded, containing a `Link` header with pagination.
 */
export const getNextPageParam = (lastPage: PicsumResponse) => {
    const nextPageLink = parseLinkHeader(lastPage.headers.link)?.next;

    if (nextPageLink) {
        const nextPageUrl = new URLSearchParams(new URL(nextPageLink).search);
        const nextPageNumber = nextPageUrl.get("page");

        if (nextPageNumber) {
            return Number(nextPageNumber);
        }
    }

    return undefined;
};
