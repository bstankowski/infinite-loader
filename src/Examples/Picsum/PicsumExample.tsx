import InfiniteLoader from "../../InfiniteLoader";
import ErrorMessage from "../../InfiniteLoader/ErrorMessage";
import PicsumPhotos from "./PicsumPhotos";
import { getPicsumPhotos } from "./utils/api";
import { getNextPageParam } from "./utils/pagination";
import css from "./picsum.module.css";

function PicsumExample() {
    return (
        <div className={css.picsumExample}>
            <InfiniteLoader getNextPageParam={getNextPageParam} queryFn={getPicsumPhotos}>
                {(data) => {
                    return data?.pages ? (
                        <PicsumPhotos pages={data.pages} />
                    ) : (
                        <ErrorMessage message="Sorry, we are unable to load the photos." />
                    );
                }}
            </InfiniteLoader>
        </div>
    );
}

export default PicsumExample;
