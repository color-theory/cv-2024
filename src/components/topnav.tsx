import Link from "next/link";

const myNav = [
    { text: "Bio", url: "/" },
    { text: "Education", url: "/education" },
    { text: "Skills", url: "/skills" },
    // { text: "Projects", url: "/projects" },
    { text: "Links", url: "/links" },
    // { text: "Projects", url: "/blog" },
];

const TopNavComponent: React.FC<{ pathname: string }> = ({ pathname }) => {
    return (
        <nav className={"topNavContainer"}>
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
