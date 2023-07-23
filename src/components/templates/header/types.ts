import { Url } from 'next/dist/shared/lib/router/router';

export type NavigationLinkType = {
    href: Url;
    children: React.ReactNode;
};

export type NavigationLinksType = NavigationLinkType[];
