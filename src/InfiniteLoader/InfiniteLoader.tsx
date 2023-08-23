import ActivityIndicator from "./ActivityIndicator";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import useInfiniteLoader from "./useInfiniteLoader";
import { InfiniteLoaderProps } from "./types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import css from "./infiniteLoader.module.css";

function InfiniteLoaderClientProvider<DataType>({
    children,
    queryClientOptions,
    ...props
}: InfiniteLoaderProps<DataType>) {
    const queryClient = new QueryClient(queryClientOptions);

    return (
        <QueryClientProvider client={queryClient}>
            <InfiniteLoader {...props}>{children}</InfiniteLoader>
        </QueryClientProvider>
    );
}

export function InfiniteLoader<DataType>({
    children,
    getNextPageParam,
    getPreviousPageParam,
    queryFn,
    queryKey,
    isHorizontal,
    activityIndicator = <ActivityIndicator />,
    intersectionRoot,
}: InfiniteLoaderProps<DataType>) {
    const {
        data,
        error,
        isLoading,
        nextPageObserverElementRef,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteLoader<DataType>({
        getNextPageParam,
        getPreviousPageParam,

        queryFn,
        queryKey,
        intersectionRoot,
    });

    if (isLoading) return activityIndicator;

    if (error) {
        return <ErrorMessage message={error.message} />;
    }

    return (
        <div className={isHorizontal ? css.horizontal : ""}>
            {data ? children(data) : <ErrorMessage message="No data" />}

            <button
                ref={nextPageObserverElementRef}
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage || !hasNextPage}
                className={css.observerElement}
            >
                {isFetchingNextPage ? (
                    <ActivityIndicator />
                ) : hasNextPage ? (
                    "Load next"
                ) : (
                    "You've reached the end"
                )}
            </button>

            {/* <ReactQueryDevtools /> */}
        </div>
    );
}

export default InfiniteLoaderClientProvider;
