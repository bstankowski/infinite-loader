import { AxiosResponse } from "axios";

export interface Photo {
    author: string;
    download_url: string;
    height: number;
    id: string;
    url: string;
    width: number;
}

export type PicsumResponse = AxiosResponse<Photo[]>;
