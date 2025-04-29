import {axiosInstance} from "./api.service.ts";
import {IMovie} from "../models/IMovie.ts";
import {IMovieResponse} from "../models/IMovieResponse.ts";

export const movieService = {
    getMovies: async (page: number): Promise<IMovie[]> => {
        const response = await axiosInstance.get<IMovieResponse>('3/discover/movie?page=' + page);
        return response.data.results;
    },
    getTotalPages: async (): Promise<number> => {
        const response = await axiosInstance.get<IMovieResponse>('3/discover/movie');
        return response.data.total_pages;
    }
}