# Infinite Loader

Infinite Loader component built with React and [TanStack Query]("https://tanstack.com/query/v4/docs/react/overview").

_Note: this is just a learning exercise, not a complete component and not meant for production – please use at your own discretion._

## Getting Started

-   Run the app: `npm run dev`
-   Run Playwright tests in UI mode `npx playwright test --ui`
-   Run Vitest tests `npm test`

## Usage and Examples

Included are two examples handling different scenarios:

1. Using `fetch` to get a list of Star Wars characters from [Swapi]("https://swapi.dev"), which provides the results with some additional data, including a URL to the next page.
2. Using `axios` to load photos from [Picsum]("https://picsum.photos"), which returns results in a simple array, and includes pagination information in `Link` headers.

Please refer to `src/InfiniteLoader/types.ts` for the component's interface, and find the usage examples in `src/Examples`.
