import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/',
    headers: {'accept': 'application/json'}
});

axiosInstance.interceptors.request.use(request => {
    request.headers['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTc0MGY1NzVmZmMyNDQzZDRjZTIzY2I4NTk1M2ZkMCIsIm5iZiI6MTc0NTgzMzY3MC4yNjIsInN1YiI6IjY4MGY0ZWM2NDYwMzU3MWVhZDBmOGI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vOkM9zakig0Tx0krPqELgaIZBvfFX99Ykj8hq55MF7c';
    return request;
})