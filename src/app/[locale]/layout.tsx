import "../globals.css";
import localFont from "next/font/local";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "../../i18n/routing";
import { ThemeProvider } from "../../providers/ThemeProvider";

type LayoutParams = Promise<{ locale: "ja" | "en" }>;

export async function generateMetadata(params: LayoutParams) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Metadata" });

    return {
        title: t("title"),
        description: t("description"),
    };
}

const font = localFont({
    src: "./fonts/Roboto-Mono-regular.woff2",
    preload: false,
});

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: LayoutParams;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }
    const messages = await getMessages();

    return (
        <html lang={locale} className={font.className}>
            <body className={`antialiased sm:overflow-y-scroll`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider>{children}</ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
