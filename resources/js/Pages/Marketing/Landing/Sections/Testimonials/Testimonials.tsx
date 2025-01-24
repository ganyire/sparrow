import Heading from '@/Components/Heading';
import PaddingX from '@/Layouts/PaddingX';
import { BsQuote, BsStarFill } from 'react-icons/bs';
import { testimonials } from './testimonials';

const Testimonials = () => {
    return (
        <PaddingX>
            <div className="space-y-6">
                <div className="mx-auto max-w-max">
                    <Heading label="Testimonials" />
                </div>
                <p className="text-center">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem
                    sint consectetur velit
                </p>

                <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-8 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                        >
                            <div className="mb-4 flex items-center">
                                <img
                                    className="h-16 w-16 rounded-full"
                                    src="/images/testimonials/testimonials-1.jpg"
                                    alt="Saul Goodman"
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold">
                                        Saul Goodman
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        CEO & Founder
                                    </p>
                                    <div className="flex space-x-1 py-2 text-yellow-400">
                                        <BsStarFill size={18} />
                                        <BsStarFill size={18} />
                                        <BsStarFill size={18} />
                                        <BsStarFill size={18} />
                                        <BsStarFill size={18} />
                                    </div>
                                </div>
                            </div>

                            <blockquote className="text-gray-700">
                                <p>
                                    <BsQuote
                                        size={30}
                                        className="inline space-x-2 text-primary-light"
                                    />{' '}
                                    <span className="italic">
                                        {testimonial.comment}
                                    </span>{' '}
                                    <BsQuote
                                        size={30}
                                        className="inline rotate-180 transform text-primary-light"
                                    />
                                </p>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </PaddingX>
    );
};

export default Testimonials;
