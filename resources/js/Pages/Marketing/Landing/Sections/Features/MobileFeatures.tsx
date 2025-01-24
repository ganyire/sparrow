import { cn } from '@heroui/react';
import { IconType } from 'react-icons';

type MobileFeaturesProps = {
    title: string;
    description: string;
    icon: IconType;
    rtl?: boolean;
};

const MobileFeatures = (props: MobileFeaturesProps) => {
    const { title, description, icon: Icon, rtl = false } = props;

    return (
        <div
            className={cn(
                'flex items-center gap-6',
                rtl ? 'justify-end' : 'justify-start',
                !rtl ? 'flex-row-reverse' : '',
            )}
        >
            <div
                className={cn(
                    'w-[350px] space-y-3',
                    rtl ? 'text-end' : 'text-start',
                )}
            >
                <h4 className="text-xl font-bold">{title}</h4>
                <p>{description}</p>
            </div>

            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary-light">
                <Icon size={25} className="text-primary-dark" />
            </div>
        </div>
    );
};

export default MobileFeatures;
