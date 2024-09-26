import { httpclient } from "../../../http";
import { useQuery } from "react-query";

export interface ICollection {
    id: string;
    title: string;
    img: string;
    description: string;
}


export const useCollection = () => {
    return useQuery<ICollection[]>({
        queryKey: ["/collection/"],

        queryFn: async () => {
            try {
                const responce = await httpclient.get("main/collection/")
                if (responce && responce.data) {
                    return responce.data;
                } else {
                    throw new Error ("Responce data is undefined");
                }
            } catch (error) {
            };
        }
    })
}