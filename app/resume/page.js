import React from 'react';
import SEO from "/components/SEO";

const Page = () => {
  return (
    <div>
      <SEO title="Puspender Tanwar - Resume" description="Puspender - Full Stack Development Engineer | Curious | Listener | Learner | Leader | Problem Solver"/>
      <section
        id="resume"
        className="min-h-screen scroll-my-1 flex pt-10 px-4 md:px-10 lg:px-20 mb-10">
        <div className="w-full flex flex-col flex-1">
          <iframe src="/resume.pdf" className="w-full h-full"/>
        </div>
      </section>
    </div>
  );
};

export default Page;