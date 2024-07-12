import TestimonialCarousel from './TestimonialCarousel';
import testimonialArray from '../../lib/data/testimonials';

export default function Blog() {
    return (
        <div className="w-full pt-28">
            <div className="w-full">
                <h2 className="text-3xl lg:w-2/3 text-center mb-10 mx-auto">Stories of Clarity</h2>
            </div>
            <TestimonialCarousel testimonials={testimonialArray} />
        </div>
    )
}