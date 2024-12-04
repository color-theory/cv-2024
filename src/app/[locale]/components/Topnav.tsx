import { Link, usePathname } from "../../../i18n/routing";
import { useTranslations } from "next-intl";

const TopNavComponent: React.FC = () => {
    const t = useTranslations("TopNav");
    const myNav = [
        { text: t("bio"), url: "/" },
        { text: t("education"), url: "/education" },
        { text: t("skills"), url: "/skills" },
        // { text: "Projects", url: "/projects" },
        { text: t("links"), url: "/links" },
        // { text: "Projects", url: "/blog" },
    ];
    const pathname = usePathname();
    return (
        <nav className={"topNavContainer flex"}>
            <ul className={"navList flex flex-col sm:flex-row flex-wrap pl-10"}>
                {myNav.map((item, index) => {
                    const activeClass =
                        item.url === pathname ? "function" : "property";
                    return (
                        <li key={index} className={`flex pr-5`}>
                            <Link
                                className={`${activeClass} topNavLink flex`}
                                href={item.url}
                            >
                                {item.text}
                            </Link>
                            {index < myNav.length - 1 && ","}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default TopNavComponent;
