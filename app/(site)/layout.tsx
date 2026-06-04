import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nourhene Mbarek | Full Stack Developer",
  metadataBase: new URL("https://portfolio-nourhene-mbk.vercel.app"),
  description:
    "Portfolio of Nourhene Mbarek, Full Stack Developer specialized in React, Next.js, Laravel and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
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
