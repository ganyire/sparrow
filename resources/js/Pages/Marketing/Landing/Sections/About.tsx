import PaddingX from '@/Layouts/PaddingX';
import { Check } from 'lucide-react';
import { BsFillTelephoneFill } from 'react-icons/bs';

const list = [
    'Lorem ipsum dolor sit amet',
    'Incididunt ut labore et',
    'Consectetur adipiscing elit',
    'Dolore magna aliqua',
    'Sed do eiusmod tempor',
    'Ut enim ad minim veniam',
];

const About = () => {
    return (
        <PaddingX>
            <div className="grid grid-cols-11">
                <div className="col-span-5 space-y-4">
                    <h2 className="text-primary-dark text-lg font-bold uppercase">
                        More about us
                    </h2>
                    <h1 className="text-[1.75rem] font-bold">
                        Voluptas enim suscipit temporibus
                    </h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <div className="grid grid-cols-2 gap-x-2 gap-y-4 pt-4">
                        {list.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-base"
                            >
                                <div className="bg-primary-dark mr-2 flex h-6 w-6 items-center justify-center rounded-full">
                                    <Check
                                        size={14}
                                        className="rounded-full stroke-white"
                                    />
                                </div>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-6">
                        <div className="flex items-center gap-2">
                            <img
                                src="/images/avatar-1.webp"
                                alt="avatar"
                                className="h-14 w-14 rounded-full"
                            />
                            <div>
                                <p className="font-bold">John Doe</p>
                                <p className="text-primary-dark text-sm">
                                    CEO & Founder
                                </p>
                            </div>
                        </div>
                        <div className="flex w-[300px] items-center gap-2 rounded-lg px-6 py-3 shadow-[0_0_15px_rgba(0,0,0,0.06)]">
                            <BsFillTelephoneFill
                                className="text-primary-dark"
                                size={25}
                            />

                            <p className="flex flex-col">
                                <span className="text-foreground-light">
                                    Call us anytime
                                </span>
                                <span className="text-foreground-dark text-lg font-bold">
                                    +123 456-789
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-6"></div>
            </div>
        </PaddingX>
    );
};

export default About;
