import { API_KEY,baseUrl } from "./Constants"



export const action = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`
export const tv_series = `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`