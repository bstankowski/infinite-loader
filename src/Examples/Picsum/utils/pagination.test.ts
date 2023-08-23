import { describe, it, expect } from "vitest";
import { getNextPageParam } from "./pagination";
import { DUMMY_LAST_PAGE, picsumPrevPageHeader } from "./mocks";

describe("getNextPageParam", () => {
    it("returns next page number if there is a 'next' link", () => {
        const nextPage = getNextPageParam(DUMMY_LAST_PAGE);
        expect(nextPage).toEqual(3);
    });

    it("returns undefined if there is only a 'prev' link", () => {
        const nextPage = getNextPageParam({
            ...DUMMY_LAST_PAGE,
            headers: {
                ...DUMMY_LAST_PAGE.headers,
                link: picsumPrevPageHeader,
            },
        });
        expect(nextPage).toBe(undefined);
    });

    it("returns undefined if there are no links", () => {
        const nextPage = getNextPageParam({
            ...DUMMY_LAST_PAGE,
            headers: {
                ...DUMMY_LAST_PAGE.headers,
                link: undefined,
            },
        });
        expect(nextPage).toBe(undefined);
    });
});
