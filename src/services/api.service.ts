import axios from "axios";

export const axiosMovieInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {'accept': 'application/json'}
});

axiosMovieInstance.interceptors.request.use(request => {
    request.headers['Authorization'] = 'Bearer ' + import.meta.env.VITE_API_TOKEN;
    return request;
});

export const axiosLoginInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json'}
});