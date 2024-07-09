import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import Testimonial from './Testimonial';

interface Testimonials {
  testimonials: {
    quote: string;
    user: string;
  }[];
}

export default function TestimonialCarousel({ testimonials }: Testimonials) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
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
      <div className="px-8">
          <Slider {...settings}>
              {testimonials?.map((testimonial, index) => (
                  <Testimonial key={index} quote={testimonial.quote} user={testimonial.user} />
              ))}
          </Slider>
      </div>
  );
};
