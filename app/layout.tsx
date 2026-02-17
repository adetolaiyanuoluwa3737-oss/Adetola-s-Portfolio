import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adetola Iyanuoluwa | B2B SaaS Content Writer",
  description: "Content That Doesn't Just Inform—It Converts, Ranks, and Sells. B2B SaaS content writer transforming technical topics into compelling narratives.",
  keywords: ["B2B SaaS", "Content Writing", "Technical Writing", "SEO", "Storytelling", "Content Strategy"],
  authors: [{ name: "Adetola Iyanuoluwa" }],
  openGraph: {
    title: "Adetola Iyanuoluwa | B2B SaaS Content Writer",
    description: "Content That Doesn't Just Inform—It Converts, Ranks, and Sells",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
