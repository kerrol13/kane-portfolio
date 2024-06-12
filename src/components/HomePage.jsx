import { useEffect } from "react";
import Awards from "./Awards";
import HeroSecAboutMe from "./HeroSecAboutMe";
import HeroSecAnchor from "./HeroSecAnchor";
import HeroSecNamePosition from "./HeroSecNamePosition";
import PageTransition from "./PageTransition";
import ProjectList from "./ProjectList";
import SmoothScroll from "./SmoothScroll";
import TechStack from "./TechStack";
import WorkExp from "./WorkExp";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white ">
      <PageTransition />
      <SmoothScroll>
        <main className="p-5 xl:p-8">
          <section className="min-h-[768px]   h-screen md:h-[80vh] grid xl:h-[100vh] xl:grid-cols-2 content-between text-zinc-800 ">
            <HeroSecNamePosition />
            <HeroSecAnchor />
            <HeroSecAboutMe />
          </section>
          <section className="mt-5 mb-12 md:mt-0 gap-y-16 grid lg:grid-cols-2 grid-rows-1 uppercase text-[clamp(.9rem,10vw,.7vw)] text-zinc-800 ">
            <ProjectList />
            <TechStack />
            <WorkExp />
            <Awards />
          </section>
        </main>
      </SmoothScroll>
    </div>
  );
};
export default HomePage;
