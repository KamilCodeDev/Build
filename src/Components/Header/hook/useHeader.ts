import { httpclient } from "../../../http";
import { useQuery } from "react-query";

export interface IHeader {
    id: string;
    title_ru: string;
    title_uz: string;
    title_en: string;
}



export const useHeader = () => {
    return useQuery<IHeader[]>({
        queryKey: ["/header/"],

        queryFn: async () => {
            try {
                const responce = await httpclient.get("/main/maintitle/")
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