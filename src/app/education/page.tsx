"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTheme } from "../../hooks/theme";

export default function Education() {
    const theme = useTheme();
    if (!theme) return null;

    const bodyClass = `container contentContainer grid content-between min-h-svh`;
    return (
        <div className={bodyClass}>
            <main className="mainContent flex flex-col p-3 md:p-10 text-2xl">
                <Header />
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
                        <ul className="pl-10">
                            <li>
                                <span className="comment">
                                    {"/* "}The University of Kansas{" "}
                                    <em className="text-nowrap">
                                        Lawrence, KS
                                    </em>
                                    {" */"}
                                </span>
                            </li>
                            <li>B.A. in Fine Arts, 2016</li>
                        </ul>
                    </div>
                    <div>
                        <span className="angle">{"<"}</span>
                        <span className="tag">/li</span>
                        <span className="angle">{">"}</span>
                    </div>
                    <div>
                        <span className="angle">{"<"}</span>
                        <span className="tag">li</span>
                        <span className="angle">{">"}</span>
                    </div>
                    <div>
                        <ul className="pl-10">
                            <li>
                                <span className="comment">
                                    {"/* "}Kansai University{" "}
                                    <em className="text-nowrap">
                                        Osaka, Japan
                                    </em>
                                    {" */"}
                                </span>
                            </li>
                            <li>
                                Intensive Japanese Language &amp; Culture
                                Program (Bekka),{" "}
                                <span className="text-nowrap">2012-2013</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="angle">{"<"}</span>
                        <span className="tag">/li</span>
                        <span className="angle">{">"}</span>
                    </div>
                    <div>
                        <span className="angle">{"<"}</span>
                        <span className="tag">li</span>
                        <span className="angle">{">"}</span>
                    </div>
                    <div>
                        <ul className="pl-10">
                            <li>
                                <span className="comment">
                                    {"/* "}Pinnacle Career Institute{" "}
                                    <em className="text-nowrap">
                                        Kansas City, MO
                                    </em>
                                    {" */"}
                                </span>
                            </li>
                            <li>A.A.S. in Electronics, 2004</li>
                            <li>Graduated with Honors</li>
                        </ul>
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
