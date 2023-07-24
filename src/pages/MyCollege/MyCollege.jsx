import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../components/Shared/Button/Button";


const MyCollege = () => {
    const { user, loading } = useAuth();
    const { data: myColleges = [] } = useQuery({
        queryKey: ['myColleges'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/myCollege?email=${user?.email}`)
            if (response) {
                // console.log(response.data);
            }
            return response.data;
        },
    })
    console.log(myColleges);
    return (
        <>
            <Navbar />
            <SectionTitle>My Selected College</SectionTitle>
            {
                myColleges && Array.isArray(myColleges) && myColleges.length > 0 ? myColleges?.map(mc =>
                    <div key={mc?._id} className="md:flex items-center gap-4 border-2 rounded-xl hover:shadow-xl transition-all hover:bg-gray-50 w-full md:w-3/4 mx-auto mb-3 px-2">
                <div className="md:w-1/2 p-5">
                    <LazyLoadImage
                        src={mc?.selectedCollegeImg}
                        className="mx-auto w-full md:w-1/2 rounded-lg"
                        effect="blur"
                        delayTime={500}
                    />
                    <h2 className="text-center md:text-2xl font-semibold">{mc?.selectedCollegeName}</h2>
                </div>
                <div className="md:text-lg space-y-2 py-5">
                    <h2>Name: {mc?.name}</h2>
                    <h2>Email: {mc?.email}</h2>
                    <h2>Phone: {mc?.phone}</h2>
                    <h2>Date Of Birth: {mc?.dob}</h2>
                    <h2>Subject: {mc?.subject}</h2>
                    <h2>Address: {mc?.address}</h2>
                    <Button path={`/review/${mc?.selectedCollegeId}`}>Add Review</Button>
                </div>
            </div>):
            <div>No Data Found</div>
            }
            <Footer />
        </>
    );
};

export default MyCollege;