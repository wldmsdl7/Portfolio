import Button from "../components/Button";
import Tag from "../components/HomeSection/Tag";
import { FaArrowRight, FaRegCommentDots } from "react-icons/fa";
import { TerminalController } from "../components/HomeSection/Terminal";
import { IoIosArrowForward } from "react-icons/io";
import IntroduceItem from "../components/HomeSection/IntroduceItem";
import { INTRODUCE_ITEMS } from "../constants/introduceItem";

const HomeSection = () => (
  <section id="home" className="min-h-screen scroll-mt-16 p-8 relative">
    <div className="max-w-7xl w-full h-full grid place-items-center">
      <div className="flex flex-col w-150 h-110 -translate-x-1/4 translate-y-1/3">
        <div className="flex-1 overflow-y-auto">
          <TerminalController />
        </div>
        <div className="mt-5 flex gap-3">
          <Tag text="Full Stack Developer" color="blue" />
          <Tag text="Loves Coding" color="red" />
          <Tag text="Quick to Respond" color="yellow" />
        </div>
      </div>
      <div className="space-y-6 ml-auto translate-x-1/4 -translate-y-2/3 max-w-xl">
        <Tag text="Available for Hire" />
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
          Hi, I'm <span className="text-blue-600">Jingni</span>
        </h1>
        <div className="flex items-center gap-2 text-xl text-gray-700">
          <span className="text-gray-500">
            <IoIosArrowForward />
          </span>
          <span className="font-mono">Introduce Myself</span>
        </div>
        <div className="space-y-2">
          <div>
            {INTRODUCE_ITEMS.map((item, idx) => (
              <IntroduceItem key={idx} title={item.title}>
                {item.content}
              </IntroduceItem>
            ))}
          </div>
        </div>
        <div className="flex gap-4 pt-4">
          <Button
            text="View Projects"
            icon=<FaArrowRight />
            variant="primary"
            onClick={() => {
              const section = document.getElementById("projects");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <Button
            text="About Me"
            icon=<FaRegCommentDots />
            variant="secondary"
            onClick={() => {
              const section = document.getElementById("about");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HomeSection;
