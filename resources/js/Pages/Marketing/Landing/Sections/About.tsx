import PaddingX from '@/Layouts/PaddingX';
import { About as AboutType } from '@/types/resources';
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

type AboutProps = {
    about: AboutType;
};

const About = (props: AboutProps) => {
    const { about } = props;
    return (
        <PaddingX>
            <div className="grid grid-cols-11 gap-x-28">
                <div className="col-span-5 space-y-4">
                    <h2 className="text-lg font-bold uppercase text-primary-dark">
                        More about us
                    </h2>
                    <h1 className="text-[1.75rem] font-bold">
                        Voluptas enim suscipit temporibus
                    </h1>
                    <p>{about?.brief}</p>

                    <div className="grid grid-cols-2 gap-x-2 gap-y-4 pt-4">
                        {list.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-base"
                            >
                                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-dark">
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
                                src={about?.profile_url}
                                alt="avatar"
                                className="h-14 w-14 rounded-full"
                            />
                            <div>
                                <p className="font-bold">{about?.founder}</p>
                                <p className="text-sm text-primary-dark">
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
                                <span className="text-lg font-bold text-foreground-dark">
                                    {about?.phone}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-6">
                    <div className="relative">
                        <div>
                            <img
                                src="/images/about-5.webp"
                                alt="Business meeting"
                                className="max-w-full rounded-2xl"
                            />
                            <img
                                src="/images/about-2.webp"
                                alt="Team meeting"
                                className="absolute -left-[10%] top-[20%] w-[45%] rounded-2xl border-[8px] border-white"
                            />
                        </div>
                        <div className="absolute bottom-[5%] right-[5%] min-w-[200px] animate-float rounded-xl bg-primary-dark p-[1.5rem] text-center text-white [animation-duration:2s] [animation-timing-function:ease-in-out]">
                            <h3 className="text-2xl font-bold">
                                {about?.years_of_experience}+ Years
                            </h3>
                            <p>Of experience in business service</p>
                        </div>
                    </div>
                </div>
            </div>
        </PaddingX>
    );
};

export default About;
