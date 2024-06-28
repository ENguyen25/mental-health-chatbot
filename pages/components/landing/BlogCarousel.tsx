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
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
    <div className="flex justify-center">
        <div className="w-[90%] bg-purple-2 relative py-5 rounded-lg border border-purple-haze">
            <Slider {...settings}>
                {posts?.map((post, index) => (
                    <div key={index}>
                    <BlogPost title={post.title} image={post.image} description={post.description} />
                </div>
                ))}
            </Slider>
        </div>
    </div>
  );
};
