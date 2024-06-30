import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import Testimonial from './Testimonial';

interface TestimonialCarouselProps {
  posts: {
    title: string;
    image: string;
    description: string;
  }[];
}

export default function TestimonialCarousel({ posts }: TestimonialCarouselProps) {
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
      <div className="px-4">
          <Slider {...settings}>
              {posts?.map((post, index) => (
                  <div key={index}>
                  <Testimonial title={post.title} image={post.image} description={post.description} />
              </div>
              ))}
          </Slider>
      </div>
  );
};
