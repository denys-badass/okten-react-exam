import {axiosInstance} from "./api.service.ts";
import {IMovieResponse} from "../models/IMovieResponse.ts";

export const movieService = {
    getMovies: async (query: string): Promise<IMovieResponse> => {
        const response = await axiosInstance.get<IMovieResponse>('/discover/movie?' + query);
        return response.data;
    },
    getSearchResults: async (query: string): Promise<IMovieResponse> => {
        const response = await axiosInstance.get<IMovieResponse>('/search/movie?' + query);
        return response.data;
    }
}