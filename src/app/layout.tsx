import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const font = localFont({ src: "./fonts/Roboto-Mono-regular.woff2" });

export const metadata: Metadata = {
    title: "John Stringer - Full Stack Developer",
    description:
        "John Stringer is a full stack developer with a passion for building web applications.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={font.className}>
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
