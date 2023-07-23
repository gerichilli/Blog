import Link from 'next/link';
import Navigation from './navigation';
import { Container } from '@/components/common/container';

export const Header = () => {
    return (
        <header>
            <Container>
                <div className="min-h-20 flex border-b border-gray-900 py-5">
                    <Link href="/" className="block">
                        Logo
                    </Link>
                    <Navigation />
                </div>
            </Container>
        </header>
    );
};
