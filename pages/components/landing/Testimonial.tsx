import Image from 'next/image';

interface TestimonialProps {
  title: string;
  image: string;
  description: string;
}

export default function Testimonial({ title, image, description }: TestimonialProps) {
  return (
    <div className="h-32 bg-gradient-to-b from-blue to-pink mx-2">
      
    </div>
  );
};
