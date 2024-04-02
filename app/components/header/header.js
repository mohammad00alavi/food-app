import Image from "next/image";
import Link from "next/link";
import BackgroundHeader from "./background-header";
import logoImg from "@/assets/logo.png";
import styles from "./header.module.css";
import NavLink from "./nav-link";

const Header = () => {
    return (
        <>
            <BackgroundHeader />
            <header className={styles.header}>
                <Link href={"/"} className={styles.logo}>
                    <Image
                        width={50}
                        height={50}
                        src={logoImg.src}
                        alt="logo"
                        priority
                    />
                    The Best Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href={"/meals"}>Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/meals/share"}>Share</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/community"}>Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
