
import Button from "../../components/Shared/Button/Button";

const Profile = (props) => {
    const { name, image, email, university, address } = props;

    return (
        <>
            <h2 className="text-center text-3xl py-3 mb-5">My Profile</h2>
            <div className="bg-white p-4 shadow-xl rounded-lg w-1/2 mx-auto">
                <div className="flex justify-end">
                    <Button>Edit Profile</Button>
                </div>
                <div className="text-center">
                    <img
                        src={image}
                        alt={name}
                        className="w-32 h-32 rounded-full mx-auto mb-6"
                    />

                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    <p className="text-gray-600">{email}</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-700">University: {university}</p>
                    <p className="text-gray-700">Address: {address}</p>
                </div>
            </div>
        </>
    );
};

export default Profile;
