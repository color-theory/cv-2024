"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { useTheme } from "../hooks/theme";
import Link from "next/link";

export default function Home() {
    const theme = useTheme();
    if (!theme) return null;

    const bodyClass = `grid grid-rows-[20px_1fr_20px] ${theme}`;
    return (
        <div className={bodyClass}>
            <main className="mainContent flex flex-col md:p-10 h-lvh">
                <Header />
                <div className="text-2xl sm:pl-20">
                    <p className="pt-10">
                        Hello! Thanks for taking a look at this site. My name is
                        John and I am a software engineer. This was made as a
                        quick demonstration of my web development experience.
                        You can find the code for this site in my{" "}
                        <Link
                            className="stringLiteral"
                            href="https://github.com/color-theory/"
                        >
                            github
                        </Link>
                        . Feel free to take a look!
                    </p>

                    <p className="pt-5">
                        I have been into software development for almost as long
                        as I can remember. My first experience programming was
                        on the Commodore 64 with MS-Basic, where I learned that
                        I could make computers do what I want with a little bit
                        of effort. Since then, my interests have evolved over
                        the years, but I've always had a special place in my
                        heart for creating.
                    </p>

                    <p className="pt-5">
                        In my free time, I like to play retro video games,
                        paint, make music, and study Japanese.
                    </p>
                </div>
                <Footer />
            </main>
        </div>
    );
}
