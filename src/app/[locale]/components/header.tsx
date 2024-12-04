import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Topnav from "./Topnav";
import { Link, usePathname } from "../../../i18n/routing";
import { useTheme } from "@/providers/ThemeProvider";

type Props = {
    pageName: string;
};

const Header = (props: Props) => {
    const { pageName } = props;
    const { theme, setTheme } = useTheme();
    const pathName = usePathname();
    const t = useTranslations("Header");
    const locale = useLocale();
    const otherLocale = locale === "en" ? "ja" : "en";
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <header className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div className={`flex basis-1 flex-col ${theme}`}>
                    <div className="flex flex-row flex-wrap sm:flex-nowrap">
                        <div>
                            <span className="secondaryKeyword">
                                export&nbsp;default&nbsp;
                            </span>
                            <span className="primaryKeyword">const&nbsp;</span>
                        </div>
                        <div>
                            <span className="variable">JohnStringer</span>
                            :&nbsp;
                        </div>
                        <span className="type">FullStackDeveloper&nbsp;</span>
                        =&nbsp;
                        <span className="bracket">{"{"}</span>
                    </div>
                    <Topnav />
                </div>
                <div className="flex flex-col">
                    <button className="flex" onClick={toggleTheme}>
                        <Image
                            className="dark:invert pt-2"
                            src="/img/sun-moon.svg"
                            alt={t("themeToggleAlt")}
                            width={20}
                            height={20}
                        />
                    </button>
                    <Link locale={otherLocale} href={pathName} className="pt-3">
                        <Image
                            src={t("langImageUrl")}
                            alt={t("langImageAlt")}
                            width={20}
                            height={20}
                        />
                    </Link>
                </div>
            </div>

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
                <span className="function">{pageName}</span> =
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
