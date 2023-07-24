
import { useQuery } from "@tanstack/react-query";
import Button from "../../components/Shared/Button/Button";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const Profile = () => {
    const {user, loading} = useAuth();
    const { data: userProfile = [] } = useQuery({
        queryKey: ['userProfile'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/userProfile?email=${user?.email}`)
            if (response) {
                // console.log(response.data);
            }
            return response.data;
        },
    })
    console.log(userProfile);

    return (
        <>
            <Navbar />
            <h2 className="text-center text-3xl py-3 m-5">My Profile</h2>
            <div className="bg-white p-4 shadow-xl rounded-lg w-1/2 mx-auto">
                <div className="flex justify-end">
                    <Button path={`/updateProfile/${user?.email}`}>Edit Profile</Button>
                </div>
                <div className="text-center">
                    <img
                        src={userProfile?.image ? userProfile.image : "https://i.ibb.co/5Rcst90/proile.png"}
                        className="w-32 h-32 rounded-full mx-auto mb-6"
                    />

                    <h2 className="text-2xl font-bold text-gray-800">{userProfile?.name}</h2>
                    <p className="text-gray-600">{userProfile?.email}</p>
                    <p className="text-gray-700">University: {userProfile?.university}</p>
                    <p className="text-gray-700">Address: {userProfile?.address}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
