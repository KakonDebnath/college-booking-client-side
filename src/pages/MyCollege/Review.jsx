
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Footer from '../../components/Shared/Footer/Footer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const {id} = useParams()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, errorMsg, setErrorMsg, btnLoading, setBtnLoading } = useAuth();
    const onSubmit = (data) => {
        setErrorMsg("")
        setBtnLoading(true);
        console.log(data);
        data.email = user?.email;
        data.college = id;
        const ratingsValue = parseInt(data.ratings);
        data.ratings = ratingsValue;
        axios.post(`${import.meta.env.VITE_API_URL}/addReview`, data)
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
            <SectionTitle>Add Review</SectionTitle>
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
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type='number' max={5} min={1} placeholder="ratings" className="input input-bordered" {...register("ratings", { required: true })} />
                            {errors.ratings && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input placeholder="Details" className="input input-bordered" {...register("details", { required: true })} />
                            {errors.details && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input placeholder="Photo URL" className="input input-bordered" {...register("photo")} defaultValue={user?.photoURL} />
                            {errors.photo && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control mt-6 w-1/4 mx-auto">
                            <button type="submit" className="btn btn-warning" disabled={btnLoading}>{btnLoading ? <>Submit <span className="loading loading-spinner text-primary"></span></> : "Submit"}</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Review;