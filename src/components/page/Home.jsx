import ButtonGradient from "../../assets/svg/ButtonGradient";
import Benefits from "../Benefits";
import Collaboration from "../Collaboration";
import Header from "../Header";
import Hero from "../Hero";
import MouseGradient from "../MouseGradient";
import Pricing from "../Pricing";
import Roadmap from "../Roadmap";
import Services from "../Services";
import Important from "../Important";
import Collab from "../Collab";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MouseGradient />
      <div className="relative z-10">
        <Header />
        <main className="pt-[4.75rem]">
          <Hero />
          <Collaboration />
          <Services />
          <Benefits />
          <Roadmap />
          <Pricing />
          <Important />
          <Collab />
        </main>
      </div>
      <ButtonGradient />
    </div>
  );
};

export default Home;