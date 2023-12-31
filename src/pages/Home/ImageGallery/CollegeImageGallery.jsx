import { LazyLoadImage } from "react-lazy-load-image-component";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CollegeImageGallery = () => {
  const imageUrls = [
    "https://i.ibb.co/7bGNB77/DU.jpg",
    "https://i.ibb.co/CKnB2CH/Khulna-University-cover.jpg",
    "https://i.ibb.co/8mc9T2h/rajshahi-university-17.jpg",
    "https://i.ibb.co/HVfMPfk/agriun.jpg",
    "https://i.ibb.co/MPbg4zr/chitagong-UN.png",
    "https://i.ibb.co/30ZKT6w/buet.jpg",
    "https://i.ibb.co/7Nz4hMC/group-1.jpg",
    "https://i.ibb.co/xJvz9M6/group-2.jpg",
    "https://i.ibb.co/3Sd9L4p/group-3.jpg",
    "https://i.ibb.co/kDKNjFS/group-5.jpg",
    "https://i.ibb.co/GnRHsdh/group-4.jpg",
    "https://i.ibb.co/cYkwxjC/group-8.jpg",
    "https://i.ibb.co/6DDbXfk/group-10.jpg",
    "https://i.ibb.co/T08mK9W/group-9.jpg"
  ];

  return (
    <div className="container mx-auto p-4">
      <SectionTitle>College Graduate Image Gallery</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
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