import {
    InfiniteData,
    GetNextPageParamFunction,
    QueryFunction,
    QueryKey,
    QueryClientConfig,
    GetPreviousPageParamFunction,
} from "@tanstack/react-query";

export interface InfiniteLoaderProps<DataType> {
    // Render prop consuming data from useInfiniteQuery and rendering the components.
    children: (data: InfiniteData<DataType> | undefined) => React.ReactNode;

    // Horizontal mode - requires appropriate styling on consumer components
    isHorizontal?: boolean;

    // Custom loader component
    activityIndicator?: React.ReactNode;

    // Root element for the intersection observer
    intersectionRoot?: HTMLElement;

    // Tanstack Query-specific props
    getNextPageParam: GetNextPageParamFunction<DataType> | undefined;
    getPreviousPageParam?: GetPreviousPageParamFunction<DataType> | undefined;
    queryFn: QueryFunction<DataType, QueryKey>;
    queryKey?: QueryKey;
    queryClientOptions?: QueryClientConfig;
}
