import Link from "next/link";
import Navigation from "./navigation";

const Header = () => {
    return <header>
        <Link href="/">
            Logo
        </Link>
        <Navigation />
    </header>
}

export default Header;