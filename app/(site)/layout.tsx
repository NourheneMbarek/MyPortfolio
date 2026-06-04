import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import ThemeProvider from "./components/ThemeProvider";
import AnimatedBackground from "./components/AnimatedBackground";
import BackToTop from "./components/BackToTop";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nourhene Mbarek | Full Stack Developer",

  metadataBase: new URL("https://portfolio-nourhene-mbk.vercel.app"),

  description:
    "Portfolio of Nourhene Mbarek, Full Stack Developer specialized in React, Next.js, Laravel and TypeScript.",

  openGraph: {
    title: "Nourhene Mbarek | Full Stack Developer",
    description:
      "Full Stack Developer specialized in React, Next.js, Laravel and TypeScript.",
    url: "https://portfolio-nourhene-mbk.vercel.app",
    siteName: "Nourhene Mbarek Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nourhene Mbarek Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nourhene Mbarek | Full Stack Developer",
    description:
      "Full Stack Developer specialized in React, Next.js, Laravel and TypeScript.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body
        className={`${inter.className} bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300`}
      > */}
      <body
        className={`${inter.className} bg-grid  bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <AnimatedBackground />
          <Navbar />
          {children}
          <Footer />
           <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

// import "../globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Navbar from "./components/global/Navbar";
// import Footer from "./components/global/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Portfolio Nourhene",
//   metadataBase: new URL("https://sanity-nextjs-site.vercel.app"),
//   description: "A personal portfolio site built with Sanity and Next.js",
//   openGraph: {
//     images:
//       "",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-zinc-900 text-white`}>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
