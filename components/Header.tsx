"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <div
            className={"sticky px-5 md:px-11 top-0 z-20 transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(20,20,20,0.1)] backdrop-blur-md md:bg-transparent md:shadow-none"}
        >
            <div className="relative">
                <div className="flex justify-between items-center relative h-full">
                    <Link
                        href="/"
                        className="font-thicccboi text-[26px] leading-7 font-bold md:text-[32px] md:leading-10 py-5 h-full border-b-0 hover:border-b-0"
                    >
                        Puspender Tanwar
                    </Link>
                    <div className="flex items-center gap-6 h-full">
                        <div className="flex items-center gap-x-4 sm:gap-x-6 z-[1] relative justify-end py-5 h-full">
                            <Link
                                href="/tech-stack"
                                className={`text-lg hover:cursor-pointer ${
                                    isActive("/tech-stack") ? "font-bold underline underline-offset-8" : "font-medium"
                                }`}
                            >
                                tech-stack
                            </Link>
                            <Link
                                href="/blogs"
                                className={`text-lg hover:cursor-pointer ${
                                    isActive("/blogs") ? "font-bold underline underline-offset-8" : "font-medium"
                                }`}
                            >
                                blogs
                            </Link>
                            <Link
                                href="/resume"
                                className={`text-lg hover:cursor-pointer ${
                                    isActive("/resume") ? "font-bold underline underline-offset-8" : "font-medium"
                                }`}
                            >
                                resume
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;