import { LazyLoadImage } from "react-lazy-load-image-component";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const CollegeImageGallery = () => {
    const imageUrls = [
      "https://i.ibb.co/7bGNB77/DU.jpg",
      "https://i.ibb.co/CKnB2CH/Khulna-University-cover.jpg",
      "https://i.ibb.co/8mc9T2h/rajshahi-university-17.jpg",
      "https://i.ibb.co/HVfMPfk/agriun.jpg",
      "https://i.ibb.co/MPbg4zr/chitagong-UN.png",
      "https://i.ibb.co/30ZKT6w/buet.jpg"
    ];
  
    return (
      <div className="container mx-auto p-4">
        <SectionTitle>College Graduate Image Gallery</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageUrls.map((imageUrl, index) => (
            <LazyLoadImage
              key={index}
              src={imageUrl}
              alt={`Group ${index + 1}`}
              className="w-full h-40 object-cover rounded-md cursor-pointer"
              effect="blur"
              delayTime={500}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default CollegeImageGallery;