import axios from "axios";
import { PicsumResponse } from "../types";

const PICSUM_API_URL = "https://picsum.photos/v2/";

const PAGE_LENGTH = 10;

/**
 * Load a page of photos from Picsum.
 * @param pageParam Page number.
 * @returns Entire Axios response including headers with pagination.
 */
export const getPicsumPhotos = async ({ pageParam = 1 }): Promise<PicsumResponse> =>
    axios.get(`${PICSUM_API_URL}list?limit=${PAGE_LENGTH}&page=${pageParam}`);
