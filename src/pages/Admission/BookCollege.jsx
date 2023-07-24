import { useParams } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const BookCollege = () => {
    const { id } = useParams()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, errorMsg, setErrorMsg, btnLoading, setBtnLoading } = useAuth();

    const { data: selectedCollege = [] } = useQuery({
        queryKey: ['selectedCollege'],
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/collegeDetails/${id}`)
            if (response) {
                // console.log(response.data);
            }
            return response.data;
        },
    })
// console.log(selectedCollege);
    const onSubmit = (data) => {
        setErrorMsg("")
        setBtnLoading(true);
        data.selectedCollegeName = selectedCollege?.collegeName;
        data.selectedCollegeImg = selectedCollege?.collegeImage;
        data.selectedCollegeId = id;
        console.log(data);
        axios.post(`${import.meta.env.VITE_API_URL}/addCollege`, data)
            .then((response) => {
                Swal.fire(
                    'Good job!',
                    'Your Successfully Booked!',
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
            <SectionTitle>Book College</SectionTitle>
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
                            <input placeholder="Name" className="input input-bordered" {...register("name", { required: true })} defaultValue={user?.displayName} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input placeholder="Subject" className="input input-bordered" {...register("subject", { required: true })} />
                            {errors.subject && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input placeholder="email" className="input input-bordered" {...register("email", { required: true })} defaultValue={user?.email} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input placeholder="Phone" className="input input-bordered" {...register("phone", { required: true })} />
                            {errors.phone && <span className="text-red-500">This field is required</span>}
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
                                <span className="label-text">Date Of Birth</span>
                            </label>
                            <input placeholder="Date Of Birth" type="date" className="input input-bordered" {...register("dob", { required: true })} />
                            {errors.dob && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input placeholder="Photo URL" className="input input-bordered" {...register("photo")} />
                        </div>
                        <div className="form-control mt-6 w-2/4 mx-auto">
                            <button type="submit" className="btn btn-warning" disabled={btnLoading}>{btnLoading ? <>Submit <span className="loading loading-spinner text-primary"></span></> : "Submit"}</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BookCollege;