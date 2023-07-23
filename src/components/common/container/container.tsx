import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge'

export const Container = ({ className, children, ...props }: HTMLProps<HTMLDivElement>) => {
    return <div className={twMerge("container mx-auto px-4 max-w-7xl", className)} {...props}>
        {children}
    </div>
}