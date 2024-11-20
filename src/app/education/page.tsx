"use client";
import Header from "../../components/header";
import { useTheme } from "../../hooks/theme";

export default function Home() {
    const theme = useTheme();
    if (!theme) return null;

    const bodyClass = `grid grid-rows-[20px_1fr_20px] ${theme}`;
    return (
        <div className={bodyClass}>
            <main className="mainContent flex flex-col h-svh">
                <Header />
            </main>
        </div>
    );
}
