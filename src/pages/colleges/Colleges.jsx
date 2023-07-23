
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";
import Button from "../../components/Shared/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useLocation } from "react-router-dom";
import useAllColleges from "../../hooks/useColleges";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AllCollege = ({ slice }) => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("/colleges")
    const [allCollege] = useAllColleges();

    console.log(allCollege);

    const handleClick = () => {
        console.log("clicked");
    }

    return (
        <>
            {!noHeaderFooter || <Navbar />}
            <SectionTitle>All Colleges</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    slice ?
                        allCollege.slice(0, 3).map(college =>
                            <div key={college?._id} className="card max-w-96 mx-auto bg-base-100 shadow-xl px-3 sm:px-0">
                                <figure>
                                    <LazyLoadImage
                                        className='h-72 w-full'
                                        effect="blur"
                                        src={college?.collegeImage}
                                        delayTime={1000}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{college?.collegeName}</h2>
                                    <div>
                                        <p>Admission Date: {college?.admissionDates}</p>
                                        <p>Events: {college?.events}</p>
                                        <p>Research History: {college?.researchHistory}</p>
                                    </div>
                                    <div className="card-actions justify-end">
                                    <Button path={`/collegeDetails/${college?._id}`} handleClick={handleClick}>Details</Button>
                                    </div>
                                </div>
                            </div>
                        ) :
                        allCollege.map(college =>
                            <div key={college?._id} className="card max-w-96 mx-auto bg-base-100 shadow-xl px-3 sm:px-0">
                                <figure>
                                    <LazyLoadImage
                                        className="h-72 w-full"
                                        src={college?.collegeImage}
                                        effect="blur"
                                        delayTime={500}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{college?.collegeName}</h2>
                                    <div>
                                        <p>Admission Date: {college?.admissionDates}</p>
                                        <p>Events: {college?.events}</p>
                                        <p>Research History: {college?.researchHistory}</p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Button path={`/collegeDetails/${college?._id}`} handleClick={handleClick}>Details</Button>
                                    </div>
                                </div>
                            </div>)
                }
            </div>
            {
                slice &&
                <div className="flex justify-end my-5">
                    <Button path={"/colleges"}>See More</Button>
                </div>

            }
            {!noHeaderFooter || <Footer />}
        </>
    );
};

export default AllCollege;
