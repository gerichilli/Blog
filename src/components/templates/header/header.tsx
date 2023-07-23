import Link from "next/link";
import Navigation from "./navigation";
import { Container } from "@/components/common/container";

export const Header = () => {
    return <header>
        <Container>
            <Link href="/">
                Logo
            </Link>
            <Navigation />
        </Container>
    </header>
}
