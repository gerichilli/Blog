import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const Container = ({ className, children, ...props }: HTMLProps<HTMLDivElement>) => {
    return (
        <div className={twMerge('container mx-auto max-w-7xl px-4', className)} {...props}>
            {children}
        </div>
    );
};
