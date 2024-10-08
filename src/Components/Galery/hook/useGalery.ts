import { httpclient } from "../../../http";
import { useQuery } from "react-query";

export interface IGalery {
    title_ru: any;
    title_uz: any;
    title_en: any;
    img: string ;
    id: string;
    title: string;
}



export const useGalery = () => {
    return useQuery<IGalery[]>({
        queryKey: ["/galery/"],

        queryFn: async () => {
            try {
                const responce = await httpclient.get("/main/project/")
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