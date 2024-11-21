"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTheme } from "../../hooks/theme";

export default function Skills() {
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
                                <div className="flex flex-row flex-wrap">
                                    <div className="flex flex-col basis-1/2 pr-10">
                                        <span className="comment">
                                            {"/* "}Frameworks & Tools:{" */"}
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
                                            {"/* "}Testing & Build:{" */"}
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
                                            {"/* "}Languages:{" */"}
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
                                            {"/* "}Methodologies & Concepts:
                                            {" */"}
                                        </span>
                                        <ul>
                                            <li>Agile (Scrum)</li>
                                            <li>Paired Programming</li>
                                            <li>Version Control </li>
                                            <li>
                                                Strategies(Trunk based, Feature
                                                Branches, Gitflow)
                                            </li>
                                            <li>Cloud Computing(AWS)</li>
                                            <li>
                                                CI/CD Pipeline Configuration
                                            </li>
                                            <li>Identity Management(Oauth2)</li>
                                            <li>ORMs (EF, SQLAlchemy)</li>
                                            <li>CQRS</li>
                                            <li>TDD</li>
                                            <li>Refactoring</li>
                                            <li>Distributed Systems</li>
                                            <li>
                                                Fundamental Data Structures &
                                                Algorithms{" "}
                                            </li>
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
