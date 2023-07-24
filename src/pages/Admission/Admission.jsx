import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import useAllColleges from "../../hooks/useColleges";

const Admission = () => {
    const [allCollege] = useAllColleges()
    console.log(allCollege);
    return (
        <>
            <Navbar />
            <SectionTitle>Choose Your College</SectionTitle>
            <div className="bg-gray-100 p-5 rounded-lg">
                {
                    allCollege.map(college => 
                    <Link key={college?._id} to={`/bookCollege/${college?._id}`} className="bg-gray-200 my-2 md:text-2xl p-2 rounded-lg md:hover:translate-x-5 hover:font-bold transition-all duration-300 block">{college?.collegeName}</Link>)
                }
            </div>
            <Footer />
        </>
    );
};

export default Admission;