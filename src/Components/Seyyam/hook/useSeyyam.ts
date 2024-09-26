import { httpclient } from "../../../http";
import { useQuery } from "react-query";

export interface ISeyyam {
    id: string;
    title: string;
    img: string;
    description: string;
}



export const useSeyyam = () => {
    return useQuery<ISeyyam[]>({
        queryKey: ["/seyyam/"],

        queryFn: async () => {
            try {
                const responce = await httpclient.get("/main/banner/")
                if (responce && responce.data) {
                    return responce.data;
                } else {
                    throw new Error("Responce data is undefined");
                }
            } catch (error) {
            }
        }

    })
}