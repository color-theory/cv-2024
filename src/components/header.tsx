import { useEffect, useState } from "react";
import Image from "next/image";
import TopNav from "./topnav";
import { usePathname } from "next/navigation";

type Optional<T> = T | null;

const Header = () => {
    const [theme, setTheme] = useState<Optional<string>>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "dark";
        setTheme(storedTheme);
        document.documentElement.setAttribute("data-theme", storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
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
                <div className="text-2xl">
                    <span className="secondaryKeyword">export default</span>{" "}
                    <span className="primaryKeyword">const</span>{" "}
                    <span className="variable">JohnStringer</span>:{" "}
                    <span className="type">FullStackDeveloper</span>
                    {" = "}
                    <span className="bracket">{"{"}</span>
                </div>
                <button className="flex" onClick={toggleTheme}>
                    <Image
                        className="dark:invert pt-2"
                        src="/img/sun-moon.svg"
                        alt="Toggle Theme"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
            <TopNav pathname={pathname} />
            <div className="flex flex-row text-2xl">
                <div className="flex flex-col overflow-hidden">
                    <div className="flex flex-nowrap">
                        <span className="bracket">{"}"}</span>;
                        <span className="comment pl-7">
                            {"//"} ------------------------
                        </span>
                    </div>
                </div>
            </div>
            <div className="text-2xl mt-5 text-nowrap">
                <span className="secondaryKeyword">export </span>
                <span className="primaryKeyword">const </span>
                <span className="function">{hrPath}</span> =
                <span className="bracket"> ()</span>
                <span className="primaryKeyword"> {"=>"}</span>{" "}
                <span className="bracket">{"("}</span>
            </div>
        </header>
    );
};

export default Header;
