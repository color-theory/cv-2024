import { useEffect, useState } from "react";
import Image from "next/image";
import TopNav from "./topnav";
import { usePathname } from "next/navigation";

type Optional<T> = T | null;

const Header = () => {
    const [theme, setTheme] = useState<Optional<string>>(null);
    const [lang, setLang] = useState<Optional<string>>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "dark";
        const storedLang = localStorage.getItem("lang") || "en";
        setTheme(storedTheme);
        setLang(storedLang);
        document.documentElement.setAttribute("data-theme", storedTheme);
        document.documentElement.setAttribute("lang", storedLang);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const toggleLang = () => {
        const newLang = lang === "en" ? "ja" : "en";
        setLang(newLang);
        document.documentElement.setAttribute("lang", newLang);
        localStorage.setItem("lang", newLang);
    };

    const pathname = usePathname();
    const hrPath =
        pathname === "/"
            ? "Bio"
            : pathname.substring(1).charAt(0).toUpperCase() +
              pathname.substring(2);
    return (
        <header className="flex flex-col">
            <div className={`flex basis-1 flex-row justify-between ${theme}`}>
                <div>
                    <span className="secondaryKeyword">export default</span>{" "}
                    <span className="primaryKeyword">const</span>{" "}
                    <span className="variable">JohnStringer</span>:{" "}
                    <span className="type">FullStackDeveloper</span>
                    {" = "}
                    <span className="bracket">{"{"}</span>
                </div>
                <div className="flex flex-col">
                    <button className="flex" onClick={toggleTheme}>
                        <Image
                            className="dark:invert pt-2"
                            src="/img/sun-moon.svg"
                            alt="Toggle Theme"
                            width={20}
                            height={20}
                        />
                    </button>
                    <button className="flex" onClick={toggleLang}>
                        {lang === "ja" ? (
                            <Image
                                className="pt-2"
                                src="/img/hinomaru.svg"
                                alt="Toggle Language"
                                width={20}
                                height={20}
                            />
                        ) : (
                            <Image
                                className="pt-2"
                                src="/img/unionjack.svg"
                                alt="Toggle Language"
                                width={20}
                                height={20}
                            />
                        )}
                    </button>
                </div>
            </div>
            <TopNav pathname={pathname} />
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div className="flex">
                        <span className="bracket">{"}"}</span>;
                        <span className="comment pl-7">{"//"} -----------</span>
                    </div>
                </div>
            </div>
            <div className="mt-5 ">
                <span className="secondaryKeyword">export </span>
                <span className="primaryKeyword">const </span>
                <span className="function">{hrPath}</span> =
                <span className="text-nowrap">
                    <span className="bracket"> ()</span>
                    <span className="primaryKeyword"> {"=>"}</span>{" "}
                    <span className="bracket">{"("}</span>
                </span>
            </div>
        </header>
    );
};

export default Header;
