import Link from "next/link";

import styles from "./page.module.css";
import SlideShow from "./components/slide-show/slide-show";

export default function Home() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.slideshow}>
                    <SlideShow />
                </div>
                <div>
                    <div className={styles.hero}>
                        <h1>The Best Food for The Best Foodies</h1>
                        <p>Taste & share food from all over the world.</p>
                    </div>
                    <div className={styles.cta}>
                        <Link href="/community">Join the Community</Link>
                        <Link href="/meals">Explore Meals</Link>
                    </div>
                </div>
            </header>
            <main>
                <section className={styles.section}>
                    <h2>How it works</h2>
                    <p>
                        The Best Food is a platform for foodies to share their
                        favorite recipes with the world. It&apos;s a place to
                        discover new dishes, and to connect with other food
                        lovers.
                    </p>
                    <p>
                        The Best Food is a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Why The Best Food?</h2>
                    <p>
                        The Best Food is a platform for foodies to share their
                        favorite recipes with the world. It&apos;s a place to
                        discover new dishes, and to connect with other food
                        lovers.
                    </p>
                    <p>
                        The Best Food is a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                </section>
            </main>
        </>
    );
}
