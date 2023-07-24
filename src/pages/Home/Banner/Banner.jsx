import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const BannerSection = () => {
    const imageUrls = [
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
        <Carousel
            autoPlay={false}
            infiniteLoop={true}
            transitionTime={1000}
            className="text-left"
            swipeable={true}
        >
            {
                imageUrls.map((img, i) => <img key={i} src={img}/>)
            }
        </Carousel>
    );
};

export default BannerSection;