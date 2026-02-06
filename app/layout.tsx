import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "AXS Pro Widget",
    description: "Design Inclusivo per un Web Senza Barriere",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
            <body className="bg-gray-50 text-gray-900 font-sans">
                {children}
                <div id="axs-widget-root"></div>
            </body>
        </html>
    );
}
