import {axiosMovieInstance} from "./api.service.ts";
import {IMovieResponse} from "../models/IMovieResponse.ts";
import {IMovieParams} from "../models/IMovieParams.ts";

const fetchMovies = async (endpoint: string, params: IMovieParams): Promise<IMovieResponse> => {
    const response = await axiosMovieInstance.get<IMovieResponse>(endpoint, {params});
    return response.data;
}

export const movieService = {
    getMovies: (params: IMovieParams) => {
        return fetchMovies('/discover/movie', params);
    },
    getSearchResults: (params: IMovieParams) => {
        return fetchMovies('/search/movie', params);
    },
}