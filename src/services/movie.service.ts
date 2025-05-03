import {axiosInstance} from "./api.service.ts";
import {IMovie} from "../models/IMovie.ts";
import {IMovieResponse} from "../models/IMovieResponse.ts";

export const movieService = {
    getMovies: async (page: string, sortBy: string): Promise<IMovie[]> => {
        const params = new URLSearchParams({page: page, sort_by: sortBy});
        const response = await axiosInstance.get<IMovieResponse>('/discover/movie?' + params);
        return response.data.results;
    },
    getTotalPages: async (): Promise<number> => {
        const response = await axiosInstance.get<IMovieResponse>('/discover/movie');
        return response.data.total_pages;
    },
    getSearchResults: async (query: string): Promise<IMovieResponse> => {
        const params = new URLSearchParams({query: query});
        const response = await axiosInstance.get<IMovieResponse>('/search/movie?' + params);
        return response.data;
    }
}