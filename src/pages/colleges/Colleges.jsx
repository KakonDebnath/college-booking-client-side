import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AllCollege = () => {
    const { data: allCollege = [] } = useQuery({
        queryKey: ['allCollege'],
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/allCollege`)
            if (response) {
                // console.log(response.data);
            }
            return response.data;
        },
    })

    return (
        <>
            <h1>All College</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    allCollege.map(college => <div key={college?._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-46 w-full" src={college?.collegeImage} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </>
    );
};

export default AllCollege;
