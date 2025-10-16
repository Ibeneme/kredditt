import OpportunitiesSection from "../../sections/Opportunities/Opportunities";
import StatSection from "../../sections/Stats/Stats";
import Features from "../../sections/features/Features";
import HeroSection from "../../sections/hero/Hero";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OpportunitiesSection />
      <StatSection />
      <Features />
    </div>
  );
};

export default Home;
