import TitleAndLinks from "./TitleAndLinks";
import ANCHOR from "../data/SOCIAL_ANCHOR";

const HeroSecAnchor = () => {
  return (
    <div className="xl:h-[33vh] grid grid-cols-2 uppercase  xl:grid-cols-3 text-[clamp(.9rem,10vw,.7vw)] ml-[clamp(0rem,2vw,.6vw)]  ">
      <div className="space-y-8">
        <TitleAndLinks delay={0.6} title="Information" anchor={ANCHOR.info} self />
        <TitleAndLinks delay={0.7} title="Contact" anchor={ANCHOR.contact} />
      </div>
      <TitleAndLinks delay={0.8} title="Social" anchor={ANCHOR.social} />
    </div>
  );
};
export default HeroSecAnchor;
