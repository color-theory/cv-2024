"use client";
import { useTranslations } from "next-intl";
import Header from "../components/header";
import Footer from "../components/footer";
import { useTheme } from "@/providers/ThemeProvider";

export default function Projects() {
    const pageName = "ProjectsPage";
    const t = useTranslations(pageName);

    const { theme } = useTheme();
    if (!theme) return null;

    const bodyClass = `container contentContainer grid content-between min-h-svh`;
    return (
        <div className={bodyClass}>
            <main className="mainContent flex flex-col p-3 md:p-10 text-2xl">
                <Header pageName={t("title")} />
                <div className="sm:pl-10 text-nowrap">
                    <span className="angle">{"<"}</span>
                    <span className="tag">ul</span>
                    <span className="angle">{">"}</span>
                </div>
                <div className="sm:pl-20 flex flex-col">
                    <div className="flex">
                        <span className="angle">{"<"}</span>
                        <span className="tag">li</span>
                        <span className="angle">{">"}</span>
                    </div>
                    <div>
                        <span className="comment">TBD</span>
                    </div>
                    <div>
                        <span className="angle">{"<"}</span>
                        <span className="tag">/li</span>
                        <span className="angle">{">"}</span>
                    </div>
                </div>
                <div className="sm:pl-10">
                    <span className="angle">{"</"}</span>
                    <span className="tag">ul</span>
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
