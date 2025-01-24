import PaddingX from '@/Layouts/PaddingX';
import { Link } from '@inertiajs/react';
import { BsPlayCircle } from 'react-icons/bs';
import { sectionIds } from '../../menu';

const Home = () => {
    return (
        <div>
            <PaddingX>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col justify-center gap-y-10">
                        <div className="space-y-3">
                            <h2 className="text-5xl font-bold">
                                Maecenas Vitae
                            </h2>
                            <h2 className="text-5xl font-bold">
                                Consectetur Led
                            </h2>
                            <h2 className="text-5xl font-bold text-primary-dark">
                                Vestibulum Ante
                            </h2>
                        </div>

                        <p>
                            Nullam quis ante. Etiam sit amet orci eget eros
                            faucibus tincidunt. Duis leo. Sed fringilla mauris
                            sit amet nibh. Donec sodales sagittis magna.
                        </p>

                        <div className="flex gap-x-6">
                            <Link
                                href={`#${sectionIds.about}`}
                                className="transform rounded-full bg-primary-dark px-10 py-3 font-bold text-white duration-150 ease-in-out hover:bg-primary-600"
                            >
                                Get Started
                            </Link>

                            <a
                                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                                className="flex items-center gap-2 font-bold hover:text-primary-dark"
                            >
                                <BsPlayCircle size={25} />
                                <span>Play video</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <img src="/images/illustration1.webp" alt="" />
                    </div>
                </div>
            </PaddingX>
        </div>
    );
};

export default Home;
