import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Puspender Tanwar's Portfolio",
  description:
    "Innovative Full Stack Developer and tech startup Co-founder having expertise in building products from scratch. Passionate Learner & Web Security Enthusiast. Effective Team Leader & Collaborative Player",
};

function NavLink({ text, href }) {
  return (
    <a
      href={href}
      className="flex-1 flex px-2 mx-1 justify-center items-center min-h-full text-lg hover:bg-slate-800 hover:text-yellow-300 rounded-sm transition-all">
      {text}
    </a>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      </head>
      <body className={inter.className}>
        <header className="flex xl:px-80">
          <div className="flex-auto font-mono italic space-x-10 m-4 font-bold">
            <Link href="/">
              <Image src="/hiking.svg" height={200} width={120} alt="Icon" />
            </Link>
          </div>
          <nav className="flex flex-1 justify-between h-10 m-5 flex-col sm:flex-row">
            <NavLink text="Skills" href="#skills" />
            <NavLink text="Projects" href="#projects" />
            <NavLink text="Resume" href="#resume" />
            <NavLink text="Contact" href="#contact" />
          </nav>
        </header>
        <div className="xl:px-80">{children}</div>
        <footer className="bg-transparent p-2">
          <p className="text-sm italic">
            Puspender Tanwar © All rights are reserved | 2023
          </p>
        </footer>
      </body>
    </html>
  );
}
