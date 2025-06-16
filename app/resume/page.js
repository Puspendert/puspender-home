import React from 'react';

const Page = () => {
  return (
    <div>
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