import { useTranslations } from "next-intl";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Skills() {
    const pageName = "SkillsPage";
    const t = useTranslations(pageName);

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
                        <ul className="pl-10">
                            <li>
                                <div className="flex flex-row flex-wrap">
                                    <div className="flex flex-col basis-1/2 pr-10">
                                        <span className="comment">
                                            {"/* "}
                                            {t("frameworksTools")}
                                            {" */"}
                                        </span>
                                        <ul>
                                            <li>Node.js</li>
                                            <li>ASP.Net</li>
                                            <li>React</li>
                                            <li>Redux</li>
                                            <li>React Query</li>
                                            <li>Next.js</li>
                                            <li>Angular</li>
                                            <li>Docker</li>
                                            <li>Flask</li>
                                            <li>Ansible</li>
                                            <li>Lucene</li>
                                            <li>Elasticsearch</li>
                                            <li>Auth0</li>
                                            <li>Redis</li>
                                            <li>MongoDB</li>
                                            <li>GraphQL</li>
                                            <li>NGINX</li>
                                            <li>Kafka</li>
                                            <li>JSX</li>
                                            <li>tailwindcss</li>
                                            <li>SASS</li>
                                            <li>LESS</li>
                                            <li>jQuery</li>
                                            <li>PyTorch</li>
                                            <li>TensorFlow</li>
                                            <li>TensorFlow.js</li>
                                            <li>OpenCV</li>
                                        </ul>
                                        <span className="comment mt-5">
                                            {"/* "}
                                            {t("testingBuild")}
                                            {" */"}
                                        </span>
                                        <ul>
                                            <li>Jest</li>
                                            <li>React Testing Library</li>
                                            <li>NUnit</li>
                                            <li>xUnit</li>
                                            <li>Pytest</li>
                                            <li>Webpack</li>
                                            <li>Vite</li>
                                            <li>Nuget</li>
                                            <li>Poetry</li>
                                            <li>NPM</li>
                                            <li>Gulp</li>
                                            <li>Grunt</li>
                                            <li>esbuild</li>
                                            <li>Git (GitHub, GitLab)</li>
                                            <li>Mercurial</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col basis-1/2  mt-5 lg:mt-0 pr-10">
                                        <span className="comment">
                                            {"/* "}
                                            {t("languages")}
                                            {" */"}
                                        </span>
                                        <ul>
                                            <li>TypeScript</li>
                                            <li>JavaScript (ES2024)</li>
                                            <li>Python</li>
                                            <li>C#</li>
                                            <li>Java</li>
                                            <li>C++</li>
                                            <li>SQL(PostgreSQL, MySQL)</li>
                                            <li>HTML5</li>
                                            <li>CSS3</li>
                                            <li>Perl</li>
                                            <li>VBScript</li>
                                            <li>PHP</li>
                                            <li>6502</li>
                                            <li>Assembly</li>
                                        </ul>
                                        <span className="comment mt-5">
                                            {"/* "}
                                            {t("methodologiesConcepts")}
                                            {" */"}
                                        </span>
                                        <ul>
                                            <li>{t("agile")}</li>
                                            <li>{t("pairProgramming")}</li>
                                            <li>{t("versionControl")}</li>
                                            <li>{t("cloudComputing")}</li>
                                            <li>{t("i18n")}</li>
                                            <li>{t("serverSideRendering")}</li>
                                            <li>{t("cicd")}</li>
                                            <li>{t("identity")}</li>
                                            <li>{t("orm")}</li>
                                            <li>{t("cqrs")}</li>
                                            <li>{t("tdd")}</li>
                                            <li>{t("refactoring")}</li>
                                            <li>{t("distributed")}</li>
                                            <li>{t("fundamentalDsAlgos")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
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
