import Link from "next/link";
import styles from "./page.module.css";
import MealGrid from "../components/meals/meal-grid";

export default function MealsPage() {
    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meal created{" "}
                    <span className={styles.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipes and cook it by yourself.</p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <MealGrid meals={[]} />
            </main>
        </>
    );
}
