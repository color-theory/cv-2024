"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { useTheme } from "../hooks/theme";
import Link from "next/link";

export default function Home() {
    const theme = useTheme();
    if (!theme) return null;

    const bodyClass = `container contentContainer grid content-between min-h-svh`;
    return (
        <div className={bodyClass}>
            <main className="mainContent flex flex-col p-3 md:p-10 text-2xl">
                <Header />
                <div className="sm:pl-10 text-nowrap">
                    <span className="angle">{"<"}</span>
                    <span className="tag">pre</span>{" "}
                    <span className="angle">{">"}</span>
                </div>
                <div className="sm:pl-20 flex flex-col">
                    <p className="mt-5">
                        Hello! Thanks for stopping by. My name is John and
                        I&apos;m a <span className="primaryKeyword">{"{"}</span>
                        <span className="stringLiteral">
                            {'"software engineer"'}
                        </span>
                        <span className="primaryKeyword">{"}"}</span>. This site
                        was created to be a small demonstration of my web
                        development abilities. You can find the code for this
                        site on my{" "}
                        <Link
                            className="property"
                            href="https://github.com/color-theory/"
                        >
                            GitHub Page
                        </Link>
                        . Please feel free to explore the other projects as
                        well.
                    </p>

                    <p className="mt-5">
                        I have been intrigued by software development since my
                        early childhood. My first programming{" "}
                        <span className="primaryKeyword">{"{"}</span>
                        <span className="stringLiteral">{'"experience"'}</span>
                        <span className="primaryKeyword">{"}"}</span> was on the
                        Commodore 64 with MS-Basic, where I learned that I could
                        make computers perform my bidding with a small amount of
                        effort. Since then, my interests have evolved over the
                        years, but I think that I&apos;ll always have a special
                        place in my heart for{" "}
                        <span className="primaryKeyword">{"{"}</span>
                        <span className="stringLiteral">
                            {'"developing products"'}
                        </span>
                        <span className="primaryKeyword">{"}"}</span> that are
                        visually enticing and technically challenging. If I can
                        learn something new and create something beautiful in
                        the process, I&apos;ll consider it a win any day of the
                        week!
                    </p>
                    <p className="mt-5">Thank you again for your time.</p>
                </div>
                <div className="flex flex-row-reverse">
                    <p className="mt-5 pr-10 comment">{"//"} John Stringer</p>
                </div>
                <div className="mt-5 sm:pl-10">
                    <span className="angle">{"</"}</span>
                    <span className="tag">pre</span>
                    <span className="angle">{">"}</span>
                </div>
                <div>
                    <span className="bracket">{")"}</span>;
                </div>
            </main>
            <Footer />
        </div>
    );
}
