import { TerminalController } from "../components/HomeSection/Terminal";

const HomeSection = () => (
  <section id="home" className="min-h-screen scroll-mt-16 p-8 relative">
    <div className="max-w-7xl w-full h-full grid place-items-center">
      <div className="flex gap-6 -translate-x-1/3 translate-y-1/3 w-150 h-100 overflow-y-auto">
        <TerminalController />
      </div>
    </div>
  </section>
);

export default HomeSection;
