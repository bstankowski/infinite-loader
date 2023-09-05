import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InfiniteLoaderProps } from "./types";

/**
 * Use the provided methods and query key to load consecutive
 * pages when user scrolls to the end of the view.
 */
function useInfiniteLoader<DataType>({
    getNextPageParam,
    getPreviousPageParam,
    queryFn,
    queryKey = ["infinite-loader"],
    intersectionRoot,
}: Omit<InfiniteLoaderProps<DataType>, "children">) {
    const { ref: nextPageObserver, inView: nextPageInView } = useInView({
        root: intersectionRoot,
        // Added a small margin to the root element
        // to trigger page load before the user reaches
        // end of the view, to improve perceived performance.
        rootMargin: "0px 0px 100px 0px",
    });

    const { ref: prevPageObserver, inView: prevPageInView } = useInView({
        root: intersectionRoot,
        rootMargin: "100px 0px 0px 0px",
    });

    const {
        data,
        error,

        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,

        hasPreviousPage,
        fetchPreviousPage,
        isFetchingPreviousPage,

        isLoading,
    } = useInfiniteQuery<DataType, Error>({
        getNextPageParam,
        getPreviousPageParam,
        queryFn,
        queryKey,
    });

    useEffect(() => {
        if (nextPageInView) {
            fetchNextPage();
        }
    }, [nextPageInView, fetchNextPage]);

    useEffect(() => {
        if (prevPageInView) {
            fetchPreviousPage();
        }
    }, [prevPageInView, fetchPreviousPage]);

    return {
        data,
        error,
        isLoading,
        nextPageObserverElementRef: nextPageObserver,
        prevPageObserverElementRef: prevPageObserver,

        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,

        hasPreviousPage,
        fetchPreviousPage,
        isFetchingPreviousPage,
    };
}

export default useInfiniteLoader;
