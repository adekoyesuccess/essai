import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "EssAI - Your AI Essay Writing Assistant",
  description: "Transform your writing with EssAI - The intelligent essay writing assistant powered by advanced AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Providers>
          <Navigation />
          <div className="pt-16">
        {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
