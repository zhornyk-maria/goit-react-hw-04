import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.unsplash.com/",
})

export const requestImagesByQuery = async (query = "", page = 1) => {
    const {data} = await instance.get(`/search/photos?page=${page}&query=${query}&client_id=OlHWRmKxn7vjqXZKE1jcmlc46V7_l_EZ6-G9ALlu5AU`);
    return data;
}