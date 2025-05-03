import {axiosInstance} from "./api.service.ts";
import {IGenreResponse} from "../models/IGenre.ts";

export const genreService = {
    getGenres: async () => {
        const response = await axiosInstance.get<IGenreResponse>('/3/genre/movie/list');
        return response.data.genres;
    }
}