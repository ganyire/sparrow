import { useEffect, useState } from 'react';

const sections = [
    { id: 'section1', label: 'Section 1' },
    { id: 'section2', label: 'Section 2' },
    { id: 'section3', label: 'Section 3' },
    { id: 'section4', label: 'Section 4' },
];

export default function Welcome() {
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

    return (
        <div className="scroll-smooth">
            {/* Navigation Bar */}
            <nav className="fixed left-0 top-0 z-10 w-full bg-white shadow">
                <ul className="mx-auto flex w-[1000px] justify-center space-x-4 rounded-full border border-red-700 p-4">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className={`nav-link text-gray-600 hover:text-blue-500 ${
                                    activeSection === section.id
                                        ? 'font-bold text-blue-500'
                                        : ''
                                }`}
                            >
                                {section.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Content Sections */}
            <div className="mt-">
                {sections.map((section) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className={`min-h-screen p-8 pt-16 ${
                            section.id === 'section1'
                                ? 'bg-gray-100'
                                : section.id === 'section2'
                                  ? 'bg-gray-200'
                                  : section.id === 'section3'
                                    ? 'bg-gray-300'
                                    : 'bg-gray-400'
                        }`}
                    >
                        <h2 className="text-3xl">{section.label}</h2>
                    </section>
                ))}
            </div>
        </div>
    );
}
