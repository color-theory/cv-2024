"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTheme } from "../../hooks/theme";
import Link from "next/link";

export default function Login() {
    const theme = useTheme();
    if (!theme) return null;

    const bodyClass = `container contentContainer grid content-between min-h-svh`;
    return (
        <div className={bodyClass}>
            <main className="mainContent flex flex-col p-3 md:p-10 text-2xl">
                <Header />
                <div>
                    <Link href="https://dev-45cqnlol3elffk2n.us.auth0.com/authorize?response_type=code&client_id=t6GbvGDxdSIUlkPpCz2yVYAQw0Gm6r3n&redirect_uri=https://api.color.wtf/authenticate">
                        Login
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
