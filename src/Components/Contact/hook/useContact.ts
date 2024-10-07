import { httpclient } from "../../../http";
import { useQuery } from "react-query";

export interface IContact {
    id: string;
    first_contact: string;
    second_contact: string;
}



export const useContact = () => {
    return useQuery<IContact[]>({
        queryKey: ["/contact/"],

        queryFn: async () => {
            try {
                const responce = await httpclient.get("/main/contact/")
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