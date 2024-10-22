import axios from "axios";

export const httpclient = axios.create({
    baseURL: "https://back.seyyamgroup.uz/"
})