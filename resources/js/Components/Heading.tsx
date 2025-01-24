import { cn } from '@heroui/react';
import { ReactNode } from 'react';

type HeadingProps = {
    label: ReactNode;
    underlineCentered?: boolean;
};

const Heading = (props: HeadingProps) => {
    const { label, underlineCentered = true } = props;

    return (
        <h2
            className={cn(
                'flex max-w-max flex-col gap-2 text-3xl font-bold text-gray-800',
                underlineCentered ? 'items-center' : '',
            )}
        >
            <span>{label}</span>
            <span
                className={cn(
                    'h-[3px] w-[60px] bg-blue-500 transition-all duration-300',
                )}
            ></span>
        </h2>
    );
};

export default Heading;
