/* eslint-disable react/no-unescaped-entities */
import SEO from "/components/SEO";
import Intro from "/components/Intro";

export default function Home() {
  return (
    <>
      <SEO title="Home" description="Developer"/>
      <div
        className="px-5 sm:px-11 min-h-[calc(100vh-80px-35px)] flex justify-center items-center relative overflow-hidden">
        <div className="container mx-auto px-0 md:px-4 py-8 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-24 2xl:gap-40 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center">
              <Intro/>
            </div>
            <div className="flex flex-col justify-center max-w-[600px] m-auto">
              <div>
                <h4 className="text-muted-foreground mb-4">Latest Blogs:</h4>
                <div>
                  <p className="text-muted-foreground text-sm">Coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
