"use client";
import { useEffect } from "react";

import Footer from "../components/footer";
import { useTheme } from "../hooks/theme";
import { useLang } from "../hooks/lang";
import { MainContentEn } from "./MainContentEn";
import { MainContentJa } from "./MainContentJa";

export default function Home() {
    useEffect(() => {
        console.log(
            `%c
			┌──────────────────────────────────┐

  			   Hey there, curious developer!   
			     Welcome to my safe space.     
			                                   
			   If you're poking around here,   
			   you must love this stuff as     
			   much as I do. See ya later 🐊     
			                                   
			                    -- John        
			└──────────────────────────────────┘
		 `,
            "color: #34D399; font-size: 16px;"
        );
    }, []);

    const theme = useTheme();
    const lang = useLang();
    if (!theme || !lang) return null;

    const bodyClass = `container contentContainer grid content-between min-h-svh`;
    return (
        <div className={bodyClass}>
            {lang === "en" ? <MainContentEn /> : <MainContentJa />}
            <Footer />
        </div>
    );
}
