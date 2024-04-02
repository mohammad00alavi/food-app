"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatosaladImg from "@/assets/tomato-salad.jpg";
import styles from "./slide-show.module.css";

const Images = [
    { image: burgerImg, alt: "Burger image" },
    { image: curryImg, alt: "Curry image" },
    { image: dumplingsImg, alt: "Dumplings image" },
    { image: macncheeseImg, alt: "Macncheese image" },
    { image: pizzaImg, alt: "Pizza image" },
    { image: schnitzelImg, alt: "Schnitzel image" },
    { image: tomatosaladImg, alt: "Tomatosalad image" },
];

const SlideShow = () => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevState) =>
                prevState < Images.length - 1 ? prevState + 1 : 0
            );
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slideshow}>
            {Images.map((image, index) => (
                <Image
                    key={index}
                    src={image.image.src}
                    width={500}
                    height={500}
                    className={index === imageIndex ? styles.active : ""}
                    alt={image.alt}
                />
            ))}
        </div>
    );
};

export default SlideShow;
