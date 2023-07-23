import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import CollegeImageGallery from "./ImageGallery/CollegeImageGallery";
import AllCollege from "../colleges/Colleges";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Navbar />
            <AllCollege slice={true}/>
            <CollegeImageGallery />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;