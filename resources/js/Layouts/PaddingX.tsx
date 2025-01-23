import { PropsWithChildren } from 'react';

const PaddingX = (props: PropsWithChildren) => {
    const { children } = props;

    return <div className="mx-auto w-[1300px]">{children}</div>;
};

export default PaddingX;
