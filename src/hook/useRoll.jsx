import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useRoll = () => {
    const axiosPublic = useAxiosPublic()
    const pin = 12345;
    const { data: roll } = useQuery({
        queryKey: ['roll'],
        queryFn: async () => {
            const { data } =await axiosPublic.get(`/roll/${pin}`)
            return data;
        }
    })
    return {roll}
};

export default useRoll;