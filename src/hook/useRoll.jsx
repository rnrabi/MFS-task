import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useRoll = () => {
    const axiosPublic = useAxiosPublic()
    const email = 'razaulkpi@gmai.com'
    const { data: roll } = useQuery({
        queryKey: ['roll'],
        queryFn: async () => {
            const { data } =await axiosPublic.get(`/roll/${email}`)
            return data;
        }
    })
    return {roll}
};

export default useRoll;