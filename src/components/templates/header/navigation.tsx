import Link from 'next/link';
import { NavigationLinkType, NavigationLinksType } from './types';

type NavigationLinksProps = NavigationLinkType & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavigationLink = ({ href, children, ...props }: NavigationLinksProps) => {
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

const Navigation = () => {
    return (
        <nav>
            <Link href="/about">About</Link>
        </nav>
    );
};

export default Navigation;
