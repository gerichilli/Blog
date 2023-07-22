import Link from "next/link";

const Navigation = () => {
    return <nav>
        <Link href="/">
            Home
        </Link>
        <Link href="/about">
            About
        </Link>
    </nav>
}

export default Navigation;