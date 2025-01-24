import Heading from '@/Components/Heading';
import PaddingX from '@/Layouts/PaddingX';
import { sectionIds } from '@/Pages/Marketing/menu';
import { cn, Tab, Tabs } from '@heroui/react';
import { Link } from '@inertiajs/react';
import { BsCheck2All } from 'react-icons/bs';
import {
    mainFeatures,
    minorFeatures,
    mobileLeftFeatures,
    mobileRightFeatures,
} from './features';
import MobileFeatures from './MobileFeatures';

const Features = () => {
    return (
        <PaddingX>
            <div className="space-y-4">
                <div className="mx-auto max-w-max">
                    <Heading label="Features" />
                </div>

                <p className="text-center">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem
                    sint consectetur velit
                </p>
            </div>

            <div className="mt-14">
                <Tabs
                    items={mainFeatures}
                    aria-label="Main Features"
                    radius="full"
                    size="lg"
                    variant="solid"
                    color="primary"
                    classNames={{
                        base: 'flex justify-center',
                        tabList: 'p-2',
                        tab: 'px-6 py-3',
                    }}
                >
                    {(item) => (
                        <Tab key={item.id} title={item.name}>
                            <div className="mt-6 grid grid-cols-2 items-center gap-x-4">
                                <div className="flex flex-col justify-center gap-4">
                                    <Heading
                                        label={item.title}
                                        underlineCentered={false}
                                    />

                                    <p className="italic">{item.description}</p>

                                    <ul className="space-y-2">
                                        {item.list?.map((listItem, index) => (
                                            <li key={index} className="block">
                                                <BsCheck2All
                                                    size={25}
                                                    className="inline text-primary-dark"
                                                />
                                                <span className="pl-2">
                                                    {listItem}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <img
                                        src={item.imgSrc}
                                        className="h-auto max-w-full"
                                    />
                                </div>
                            </div>
                        </Tab>
                    )}
                </Tabs>
            </div>

            <div className="mt-20 grid grid-cols-12 gap-x-6">
                {minorFeatures.map((minorFeature) => (
                    <div
                        key={minorFeature.id}
                        style={{
                            backgroundColor: minorFeature.bgColor,
                        }}
                        className={cn(
                            'col-span-3 flex w-full flex-col justify-center gap-y-3 rounded-xl p-6',
                        )}
                    >
                        <minorFeature.icon
                            size={50}
                            className={`text-[${minorFeature.iconColor}]`}
                            style={{
                                color: minorFeature.iconColor,
                            }}
                        />
                        <h4 className="text-xl font-bold">
                            {minorFeature.title}
                        </h4>
                        <p>{minorFeature.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-20 grid grid-cols-12 gap-x-6">
                <div className="col-span-4 flex flex-col justify-center gap-y-8">
                    {mobileLeftFeatures.map((mobile) => (
                        <MobileFeatures
                            rtl
                            title={mobile.title}
                            description={mobile.description}
                            icon={mobile.icon}
                            key={mobile.id}
                        />
                    ))}
                </div>

                <div className="col-span-4 mx-auto max-w-[300px]">
                    <img
                        src="/images/phone-app-screen.webp"
                        className="mx-auto h-auto max-w-[300px]"
                    />
                </div>

                <div className="col-span-4 flex flex-col justify-center gap-y-8">
                    {mobileRightFeatures.map((mobile) => (
                        <MobileFeatures
                            title={mobile.title}
                            description={mobile.description}
                            icon={mobile.icon}
                            key={mobile.id}
                        />
                    ))}
                </div>
            </div>

            <div className="relative mt-20 grid grid-cols-12 rounded-3xl bg-primary-dark py-14 text-white">
                <div className="z-10 col-span-8 col-start-3 mx-auto flex flex-col items-center gap-y-8 text-center">
                    <h1 className="mx-auto text-5xl">
                        Maecenas tempus tellus eget condimentum
                    </h1>
                    <p className="text-lg">
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Donec velit neque,
                        auctor sit amet aliquam vel
                    </p>
                    <Link
                        href={`#${sectionIds.home}`}
                        className="max-w-max rounded-full border-2 border-white bg-primary-400 px-8 py-3 text-white"
                    >
                        Call To Action
                    </Link>
                </div>

                <div className="animate-shapes-float absolute right-[20px] top-[30px] size-[250px] rotate-[45deg] transform">
                    <img src="/images/blob_shape.svg" />
                </div>
                <div className="animate-shapes-float absolute bottom-[30px] left-[20px] size-[200px] rotate-[45deg] transform">
                    <img src="/images/blob_shape2.svg" />
                </div>

                <div className="animate-shapes-float absolute left-[210px] top-[40px] size-[180px] rotate-[45deg] transform">
                    <img src="/images/dot1.svg" />
                </div>
            </div>
        </PaddingX>
    );
};

export default Features;
