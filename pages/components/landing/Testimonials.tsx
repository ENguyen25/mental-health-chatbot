import TestimonialCarousel from './TestimonialCarousel';
import testimonialArray from '../../../lib/data/testimonials';

export default function Blog() {
    return (
        <div className="w-full pt-20 pb-40">
            <div className="w-full">
                <h2 className="w-2/3 text-center mb-10 mx-auto">Stories of Clarity</h2>
            </div>
            <TestimonialCarousel testimonials={testimonialArray} />
        </div>
    )
}