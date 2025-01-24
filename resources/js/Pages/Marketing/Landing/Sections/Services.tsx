import Heading from '@/Components/Heading';
import PaddingX from '@/Layouts/PaddingX';

const Services = () => {
    return (
        <div className="bg-secondary py-20">
            <PaddingX>
                <div className="space-y-4">
                    <div className="mx-auto max-w-max">
                        <Heading label="Services" />
                    </div>

                    <p className="text-center">
                        Necessitatibus eius consequatur ex aliquid fuga eum
                        quidem sint consectetur velit
                    </p>
                </div>
            </PaddingX>
        </div>
    );
};

export default Services;
