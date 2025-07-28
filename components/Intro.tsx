import Image from "next/image";
import {GithubIcon, LinkedinIcon, OfloyIcon, StackoverflowIcon, XIcon} from "./icons";

const Intro = () => {
    const socialLinks = [
        {
            href: "https://github.com/Puspendert",
            icon: GithubIcon,
            label: "GitHub",
        },
        {
            href: "https://www.linkedin.com/in/puspender",
            icon: LinkedinIcon,
            label: "LinkedIn",
        },
        {
            href: "https://twitter.com/puspendert",
            icon: XIcon,
            label: "X (Twitter)",
        },
        {
            href: "https://stackoverflow.com/users/4691230/the-coder",
            icon: StackoverflowIcon,
            label: "Stackoverflow",
        },
        {
            href: "https://www.ofloy.com/profile/puspender-tanwardcc",
            icon: OfloyIcon,
            label: "Ofloy",
        }
    ];

    return (
        <div className="flex flex-col items-center md:items-start lg:text-left">
            <Image
                src="/portfolio_photo.jpg"
                alt="Puspender Tanwar profile image"
                width={180}
                height={180}
                className="w-[180px] h-[180px] rounded-full mb-8 shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] sm:ml-6"
            />

            <div className="text-center md:text-start">
                <h1>Engineer | Curious | Listener | Learner | Leader | Problem Solver</h1>
                <p className="text-lg mb-4">
                    A curious engineer with a passion for solving problems
                </p>
                <p className="text-lg  mb-4">
                    Here, I share my insights on{" "}
                    <span className="text-primary">quality code</span>,{" "}
                    <span className="text-primary">databases</span>,{" "}
                    <span className="text-primary">distributed systems</span>,{" "}
                    <span className="text-primary">web security</span>,{" "}
                    <span className="text-primary">cost effective cloud</span>, and all things{" "}
                    <span className="text-primary">tech</span>.
                </p>
            </div>

            <div className={"mt-12"}>
                <p className="text-muted-foreground">Feel free to connect @</p>
                <div className="flex gap-6 md:self-start ">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-muted-foreground border-none hover:border-none hover:opacity-80 transition-all"
                            aria-label={social.label}
                            title={social.label}
                        >
                            <social.icon/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Intro;