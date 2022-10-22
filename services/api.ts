import axios from "axios";

export const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: "AIzaSyA2qQvvzLSlZDqKAGkvThwkIaYYZt0xkog",
    },
})