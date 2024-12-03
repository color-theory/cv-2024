import Header from "../components/header";
import Link from "next/link";

export const MainContentJa = () => (
    <main className="mainContent flex flex-col p-3 md:p-10 text-2xl">
        <Header />
        <div className="sm:pl-10 text-nowrap">
            <span className="angle">{"<"}</span>
            <span className="tag">pre</span>{" "}
            <span className="angle">{">"}</span>
        </div>
        <div className="sm:pl-20 flex flex-col">
            <p className="mt-5">
                こんにちは！ご訪問ありがとうございます。私はジョンと言います、そして
                <span className="primaryKeyword">{"{"}</span>
                <span className="stringLiteral">
                    {'"ソフトウェアエンジニア"'}
                </span>
                <span className="primaryKeyword">{"}"}</span>
                です。このサイトは、私のウェブ開発能力を小さな形で示すために作成されました。このサイトのコードは私の
                <Link
                    className="property"
                    href="https://github.com/color-theory/"
                >
                    GitHubページ
                </Link>
                で確認できます。ぜひ、他のプロジェクトもご覧ください。
            </p>
            <p className="mt-5">
                私は幼少期からソフトウェア開発に興味を持ち続けています。私の最初のプログラミング
                <span className="primaryKeyword">{"{"}</span>
                <span className="stringLiteral">{'"経験"'}</span>
                <span className="primaryKeyword">{"}"}</span>
                は、コモドール64でのMS-Basicで、わずかな労力でコンピュータを自分の思い通りに動かせることを学びました。
                それ以来、私の興味は年々進化してきましたが、視覚的に魅力的で技術的に挑戦的な
                <span className="primaryKeyword">{"{"}</span>
                <span className="stringLiteral">{'"製品開発"'}</span>
                <span className="primaryKeyword">{"}"}</span>
                には、ずっと特別な思い入れがあると思います。もし新しいことを学び、その過程で美しいものを作り出せるなら、それはどんな日でも勝利だと思っています！
            </p>
            <p className="mt-5">お時間をいただきありがとうございます。</p>
        </div>
        <div className="flex flex-row-reverse">
            <p className="mt-5 pr-10 comment">{"//"}ジョン・ストリンガー</p>
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
);

export default MainContentJa;
