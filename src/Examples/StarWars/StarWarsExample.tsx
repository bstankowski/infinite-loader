import InfiniteLoader from "../../InfiniteLoader";
import { getStarWarsPeople } from "./utils/api";
import ErrorMessage from "../../InfiniteLoader/ErrorMessage";
import StarWarsPeople from "./StarWarsPeople";
import { getNextPageParam, getPreviousPageParam } from "./utils/pagination";
import css from "./starwars.module.css";

function StarWarsExample() {
    return (
        <div className={css.swExample}>
            <InfiniteLoader
                queryFn={getStarWarsPeople}
                queryKey={["sw-people"]}
                getNextPageParam={getNextPageParam}
                getPreviousPageParam={getPreviousPageParam}
                queryClientOptions={{
                    defaultOptions: {
                        queries: {
                            refetchOnWindowFocus: false,
                        },
                    },
                }}
            >
                {(data) => {
                    return data?.pages ? (
                        <StarWarsPeople pages={data.pages} />
                    ) : (
                        <ErrorMessage message="Sorry, we are unable to load the data." />
                    );
                }}
            </InfiniteLoader>
        </div>
    );
}

export default StarWarsExample;
