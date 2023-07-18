import Link from "next/link";
import "./globals.css";
import { Inter, Pompiere } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Puspender Portfolio",
  description: "About Puspender Tanwar, a passionate full stack developer",
};

function NavLink({ text, href }) {
  return (
    <a
      href={href}
      className="flex-1 flex justify-center items-center min-h-full text-lg hover:bg-slate-800 hover:text-yellow-300 rounded-sm transition-all">
      {text}
    </a>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <header className="flex fixed top-0 w-screen">
          <div className="flex-auto font-mono italic space-x-10 m-4 font-bold">
            <Link href="/">
              <Image src="/hiking.svg" height={200} width={150} alt="" />
            </Link>
          </div>
          <div className="flex flex-1 justify-between h-10 m-5">
            <NavLink text="Skills" href="#skills" />
            <NavLink text="Projects" href="#projects" />
            <NavLink text="Resume" href="#resume" />
            <NavLink text="Contact" href="#contact" />
          </div>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
