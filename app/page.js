import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8 bg-wave bg-fixed bg-no-repeat bg-cover bg-transparent">
      <section className="flex flex-col items-center justify-center font-pompiere min-h-[calc(100vh-150px)] -mt-32 scroll-my-1">
        <div>
          <p className="text-2xl mb-3">Hello!</p>
          <p className="text-6xl mb-3">
            I am <span className="text-yellow-300">Puspender Tanwar</span>
          </p>
          <p className="text-2xl mb-3">
            A passionate <span className="text-yellow-300">Fullstack</span> Web
            Developer
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="scroll-mt-0 min-h-screen scroll-my-1 flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="text-4xl mb-10">Skill Sets</h3>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400 border border-slate-700">
              <tbody>
                <tr className="border-b border-b-slate-700">
                  <td className="px-6 py-4">Langauges</td>
                  <td className="px-6 py-4">Java, Javascript, Python</td>
                </tr>
                <tr className="border-b border-b-slate-700">
                  <td className="px-6 py-4">Frameworks</td>
                  <td className="px-6 py-4">
                    Spring-boot, Express.js, React.js, Next.js
                  </td>
                </tr>
                <tr className="border-b border-b-slate-700">
                  <td className="px-6 py-4">Databases</td>
                  <td className="px-6 py-4">
                    MySQL, PostgreSQL, Redis, Elasticsearch
                  </td>
                </tr>
                <tr className="border-b border-b-slate-700">
                  <td className="px-6 py-4">Build Tools/Package managers</td>
                  <td className="px-6 py-4">Maven, NPM, Yarn</td>
                </tr>
                <tr className="border-b border-b-slate-700">
                  <td className="px-6 py-4">Cloud Providers</td>
                  <td className="px-6 py-4">AWS, GCP</td>
                </tr>
                <tr className="border-b border-b-slate-700">
                  <td className="px-6 py-4">Few Others</td>
                  <td className="px-6 py-4">
                    Docker, Git, React Query, Redux, Material-UI, Tailwind CSS
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-0 min-h-screen scroll-my-1 flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="text-4xl mb-10">Projects I worked on</h3>
        </div>
      </section>

      <section
        id="resume"
        className="scroll-mt-0 min-h-screen scroll-my-1 flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center flex-1">
          <h3 className="text-4xl mb-10">Resume</h3>
          <iframe src="/resume.pdf" width={"100%"} height={"600px"} />
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-0 min-h-screen scroll-my-1 flex flex-col justify-center">
        <h3 className="text-4xl mb-10 text-center">Contact Me Via</h3>
        <div className="w-full flex flex-col justify-between items-center md:flex-row">
          <a
            href="https://www.ofloy.com/profile/puspender-tanwardcc"
            target="_blank"
            className="hover:scale-125 transition-all mb-5">
            <Image src="/ofloy_logo.svg" height={150} width={150} alt="Ofloy" />
          </a>
          <a
            href="https://twitter.com/puspendert"
            target="_blank"
            className="hover:scale-125 transition-all mb-5">
            <i className="devicon-twitter-original colored text-4xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/puspender/"
            target="_blank"
            className="hover:scale-125 transition-all mb-5">
            <i className="devicon-linkedin-plain colored text-4xl"></i>
          </a>
          <a
            href="https://stackoverflow.com/users/4691230/the-coder"
            target="_blank"
            className="hover:scale-125 transition-all mb-5">
            <Image
              src="/stack-overflow.png"
              height={100}
              width={40}
              alt="Stackoverflow"
            />
          </a>
          <a
            href="https://github.com/Puspendert"
            target="_blank"
            className="hover:scale-125 transition-all mb-5">
            <i className="devicon-github-original text-4xl"></i>
          </a>
          <a
            href="https://github.com/PTanwarCS"
            target="_blank"
            className="hover:scale-125 transition-all mb-5">
            <i className="devicon-github-original text-4xl"></i>
          </a>
        </div>
        <div className="text-center">
          <p className="text-lg text-blue-500">
            Or email @{" "}
            <a href="mailto:work.puspender@gmail.com">
              work.puspender@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
