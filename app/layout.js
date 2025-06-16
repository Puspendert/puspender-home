"use client";
import "./globals.css";
import Header from "/components/Header";
import Footer from "/components/Footer";

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth ">
      <body>
        <div className={"bg-gradient-to-br from-[#0a0a0a] via-[#0f0a15] to-[#302642]"}>
          <Header/>
          <main>
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
