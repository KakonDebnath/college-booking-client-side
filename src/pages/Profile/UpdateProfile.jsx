import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";


const UpdateProfile = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, errorMsg, setErrorMsg, btnLoading, setBtnLoading } = useAuth();

    const onSubmit = (data) => {
        setErrorMsg("")
        setBtnLoading(true);
        console.log(data);
        axios.put(`${import.meta.env.VITE_API_URL}/users`, data)
            .then((response) => {
                Swal.fire(
                    'Good job!',
                    'Profile Update Successfully!',
                    'success'
                )
                reset()
                console.log('POST request successful:', response.data);
                setBtnLoading(false);
            })
            .catch((error) => {
                console.error('Error making POST request:', error);
                setBtnLoading(false);
            });
    };
    return (
        <>
            <Navbar />
            <h2 className="text-center text-3xl py-5 font-semibold">Update Your Profile</h2>
            <div className="card flex-shrink-0 sm:w-8/12 w-full mx-auto shadow-2xl bg-base-100">
                <div className="card-body">
                    {
                        errorMsg && <div className="alert alert-warning shadow-lg">
                            <div>
                                <span>{errorMsg}</span>
                            </div>
                        </div>
                    }
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input placeholder="Name" className="input input-bordered" {...register("name", { required: true })} defaultValue={user?.displayName} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input placeholder="email" className="input input-bordered" {...register("email", { required: true })} defaultValue={user?.email}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input placeholder="Address" className="input input-bordered" {...register("address", { required: true })} />
                            {errors.address && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input placeholder="Photo URL" className="input input-bordered" {...register("image")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">University</span>
                            </label>
                            <input placeholder="University" className="input input-bordered" {...register("university")} />
                        </div>
                        <div className="form-control mt-6 w-1/4 mx-auto">
                            <button type="submit" className="btn btn-warning" disabled={btnLoading}>{btnLoading ? <>Update <span className="loading loading-spinner text-primary"></span></> : "Update Now"}</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UpdateProfile;