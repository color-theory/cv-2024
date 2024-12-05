"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function ConsoleLogger() {
    const t = useTranslations("BioPage");
    useEffect(() => {
        console.log(t("consoleLog"), "color: #34D399; font-size: 16px;");
    }, [t]);

    return null;
}
