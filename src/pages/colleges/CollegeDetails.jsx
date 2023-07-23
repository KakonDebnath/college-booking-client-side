
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useParams } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Button from '../../components/Shared/Button/Button';

const CollegeDetails = () => {
    const { id } = useParams();
    const { data: collegeDetails = [] } = useQuery({
        queryKey: ['singleCollege'],
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/collegeDetails/${id}`)
            if (response) {
                // console.log(response.data);
            }
            return response.data;
        },
    })
    console.log(collegeDetails);

    return (
        <>
            <SectionTitle>Selected College Details</SectionTitle>

            <div className='border-2 rounded-xl p-10 w-1/2 mx-auto'>
                <div className="card mx-auto bg-base-100 shadow-xl px-3 sm:px-0 ">
                    {/* <figure>
                        <img className="h-40 w-full" src={collegeDetails?.collegeImage} alt="Shoes" />
                    </figure> */}
                    <figure>
                        <LazyLoadImage
                            className='w-full'
                            effect="blur"
                            src={collegeDetails?.collegeImage}
                            delayTime={500}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{collegeDetails?.collegeName}</h2>
                        <div>
                            <p>Admission Date: {collegeDetails?.admissionDates}</p>
                            <p>Events: {collegeDetails?.events}</p>
                            <p>Research History: {collegeDetails?.researchHistory}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollegeDetails;