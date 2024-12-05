import Footer from "./components/footer";
import Header from "./components/header";
import HomeConsoleMessage from "./components/homeConsoleMessage";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";

export default function Home() {
    const pageName = "BioPage";
    const t = useTranslations(pageName);
    const bodyClass = `container contentContainer grid content-between min-h-svh`;
    return (
        <div className={bodyClass}>
            <main className="mainContent flex flex-col p-3 md:p-10 text-2xl">
                <Header pageName={t("title")} />
                <div className="sm:pl-10 text-nowrap">
                    <span className="angle">{"<"}</span>
                    <span className="tag">pre</span>{" "}
                    <span className="angle">{">"}</span>
                </div>
                <div className="sm:pl-20 flex flex-col">
                    <p className="mt-5">
                        {t("p1s1")}
                        <span className="primaryKeyword">{"{"}</span>
                        <span className="stringLiteral">
                            {t("softwareEngineer")}
                        </span>
                        <span className="primaryKeyword">{"}"}</span>
                        {t("p1s2")}
                        <Link
                            className="property"
                            href="https://github.com/color-theory/"
                        >
                            {t("githubPage")}
                        </Link>
                        {t("p1s3")}
                    </p>

                    <p className="mt-5">
                        {t("p2s1")}
                        <span className="primaryKeyword">{"{"}</span>
                        <span className="stringLiteral">{t("experience")}</span>
                        <span className="primaryKeyword">{"}"}</span>
                        {t("p2s2")}
                        <span className="primaryKeyword">{"{"}</span>
                        <span className="stringLiteral">
                            {t("developingProducts")}
                        </span>
                        <span className="primaryKeyword">{"}"}</span>
                        {t("p2s3")}
                    </p>
                    <p className="mt-5">{t("thanks")}</p>
                </div>
                <div className="flex flex-row-reverse">
                    <p className="mt-5 pr-10 comment">
                        {"//"}
                        {t("signature")}
                    </p>
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
            <HomeConsoleMessage />
            <Footer />
        </div>
    );
}
