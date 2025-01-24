import PaddingX from '@/Layouts/PaddingX';
import { cn } from '@heroui/react';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { sectionIds } from '../menu';
import ExtendedMenu from './Navigation/ExtendedMenu';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Features from './Sections/Features/Features';
import Home from './Sections/Home';
import Pricing from './Sections/Pricing';
import Services from './Sections/Services';
import Stats from './Sections/Stats/Stats';
import Testimonials from './Sections/Testimonials/Testimonials';

export default function Landing() {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionHeight = section.clientHeight;

                // Check if the section is in the viewport
                if (
                    sectionTop <= window.innerHeight / 3 &&
                    sectionTop + sectionHeight > 0
                ) {
                    currentSection = section.getAttribute('id') || '';
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // set height to screen height - 120px

    const commonSectionCss = 'min-h-[calc(100vh-140px)] pt-[150px] ';

    return (
        <main className="bg-white">
            <Head title="Home" />

            <div className="fixed left-0 top-0 z-20 w-full">
                <PaddingX>
                    <div className="pt-6">
                        <ExtendedMenu activeSection={activeSection} />
                    </div>
                </PaddingX>
            </div>

            <div>
                <section id={sectionIds.home} className={cn(commonSectionCss)}>
                    <Home />
                </section>

                <section id={sectionIds.about} className={cn(commonSectionCss)}>
                    <About />
                </section>

                <section
                    id={sectionIds.features}
                    className={cn(commonSectionCss)}
                >
                    <Features />
                    {/* <div className="mt-20">
                        <Brands />
                    </div> */}
                    <div className="mt-20 bg-[#f3f9ff] py-20">
                        <Testimonials />
                    </div>
                    <div className="mt-20 py-10">
                        <Stats />
                    </div>
                </section>

                <section
                    id={sectionIds.services}
                    className={cn(commonSectionCss)}
                >
                    <Services />
                </section>

                <section
                    id={sectionIds.pricing}
                    className={cn(commonSectionCss)}
                >
                    <Pricing />
                </section>

                <section
                    id={sectionIds.contact}
                    className={cn(commonSectionCss)}
                >
                    <Contact />
                </section>
            </div>
        </main>
    );
}
