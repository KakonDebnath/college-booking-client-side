
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Footer from '../../components/Shared/Footer/Footer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Review = () => {
    const {id} = useParams()
    return (
        <>
            <Navbar />
            <SectionTitle>Add Review</SectionTitle>
            Review: {id}
            <Footer />
        </>
    );
};

export default Review;