import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import AllCollege from "../colleges/Colleges";


const Home = () => {
    return (
        <div>
            <Navbar />
            <AllCollege slice={true}/>
            <Footer />
        </div>
    );
};

export default Home;