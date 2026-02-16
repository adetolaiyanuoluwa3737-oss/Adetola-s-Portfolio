import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adetola Iyanuoluwa | B2B SaaS Content Writer",
  description: "Content That Connects, Converts, and Ranks. Technical writing and storytelling for B2B SaaS companies.",
  keywords: ["B2B SaaS", "Content Writing", "Technical Writing", "SEO", "Storytelling"],
  authors: [{ name: "Adetola Iyanuoluwa" }],
  openGraph: {
    title: "Adetola Iyanuoluwa | B2B SaaS Content Writer",
    description: "Content That Connects, Converts, and Ranks",
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
        {children}
      </body>
    </html>
  );
}
