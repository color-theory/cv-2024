import { useEffect, useState } from "react";

export const useLang = () => {
    const [lang, setLang] = useState<string | null>(null);

    useEffect(() => {
        const storedLang = localStorage.getItem("lang") || "en";
        setLang(storedLang);
        document.documentElement.setAttribute("data-lang", storedLang);
    }, []);

    return lang;
};
