import axios from "axios";

export const httpclient = axios.create({
    baseURL: "https://back.legacy-ex.com/"
})