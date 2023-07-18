export default function Home() {
  return (
    <main className="p-8">
      <section className="flex flex-col items-center justify-center font-pompiere min-h-screen scroll-my-1">
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
          <h3 className="text-4xl mb-4 text-left">Skillsets</h3>
          <ol className="mb-5">
            <h4 className="text-2xl">Languanges</h4>
            <li>Java</li>
            <li>Javascript</li>
            <li>Python</li>
          </ol>
          <ol className="mb-5">
            <h4 className="text-2xl">Languanges</h4>
            <li>Spring Boot</li>
            <li>React + Nextjs</li>
          </ol>
          <ol className="mb-5">
            <h4 className="text-2xl">Databases</h4>
            <li>MySql</li>
            <li>PostgreSql</li>
            <li>Elasticsearch</li>
            <li>Redis</li>
          </ol>
          <ol className="mb-5">
            <h4 className="text-2xl">Cloud Providers</h4>
            <li>AWS</li>
            <li>GCP</li>
          </ol>
          <ol className="mb-5">
            <h4 className="text-2xl">Some libraries</h4>
            <li>React Query</li>
            <li>Material UI</li>
          </ol>
        </div>
      </section>
      <section id="contact" className="min-w-full scroll-my-1">
        <div className="min-w-full flex items-center justify-between">
          <a href="/">Ofloy</a>
          <a href="/">Twitter</a>
          <a href="/">LinkedIn</a>
          <a href="/">Stackoverflow</a>
          <a href="/">Github 1</a>
          <a href="/">Github 2</a>
        </div>
      </section>
    </main>
  );
}
