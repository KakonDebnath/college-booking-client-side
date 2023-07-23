import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllColleges = () => {
   
    const { refetch, data: allCollege = [] } = useQuery({
        queryKey: ['allCollege'],
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/allCollege`)
            if (response) {
                // console.log(response.data);
            }
            return response.data;
        },
    })


      return [
        allCollege, 
        refetch
    ]
}

export default useAllColleges;