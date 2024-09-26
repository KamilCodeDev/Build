import { httpclient } from "../../../http";
import { useQuery } from "react-query";

export interface ISevice {
    id: string;
    title: string;
    description: string;
    img: string;
    
}



export const useService = () => {
    return useQuery<ISevice[]>({
        queryKey: ["/service/"],

        queryFn: async () => {
            try {
                const responce = await httpclient.get("/main/service/")
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