import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSingleCollege = () => {
   
    const { refetch, data: singleCollege = [] } = useQuery({
        queryKey: ['singleCollege'],
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/collegeDetails/${id}`)
            if (response) {
                // console.log(response.data);
            }
            return response.data;
        },
    })


      return [
        singleCollege, 
        refetch
    ]
}

export default useSingleCollege;