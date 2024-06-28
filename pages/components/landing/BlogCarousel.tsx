import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BlogPost from './BlogPost';

interface BlogCarouselProps {
  posts: {
    title: string;
    image: string;
    description: string;
  }[];
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-purple-2 relative py-5">
        <div className="slick-gradient-left"></div>
        <Slider {...settings}>
            {posts.map((post, index) => (
                <div key={index}>
                <BlogPost title={post.title} image={post.image} description={post.description} />
            </div>
            ))}
        </Slider>
        <div className="slick-gradient-right"></div>
    </div>
  );
};
