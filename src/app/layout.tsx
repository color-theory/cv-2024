import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Stringer - Full Stack Developer",
  description: "John Stringer is a full stack developer with a passion for building web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
