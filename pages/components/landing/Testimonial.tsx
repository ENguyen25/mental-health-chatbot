import { useEffect } from 'react';
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  user: string;
}

export default function Testimonial({ quote, user }: TestimonialProps) {
    return (
        <div className="testimonial bg-gradient-to-b from-pink to-light-pink rounded-xl mx-2 p-8 h-full">
            <Image src="/images/quote.png" alt="quote" width={80} height={100} />
            <div className="blog-post-content mt-8">
                <p className="text-xl text-gray-800 mb-4">{quote}</p>
                <p className="text-sm text-gray-800">{user}</p>
            </div>
        </div>
    );
};
