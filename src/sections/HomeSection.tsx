import Button from "../components/Button";
import Tag from "../components/HomeSection/Tag";
import { FaArrowRight, FaRegCommentDots } from "react-icons/fa";
import { TerminalController } from "../components/HomeSection/Terminal";
import { IoIosArrowForward } from "react-icons/io";
import IntroduceItem from "../components/HomeSection/IntroduceItem";
import { INTRODUCE_ITEMS } from "../constants/introduceItem";

const HomeSection = () => (
  <section id="home" className="min-h-screen relative">
    <main className="flex flex-col xl:flex-row items-center justify-center w-full min-h-screen gap-10 px-4 py-10">
      <div className="flex flex-col justify-center h-full items-center xl:items-start">
        <div className="h-120 w-[160] overflow-y-auto">
          <TerminalController />
        </div>
        <div className="mt-5 flex gap-3 flex-wrap">
          <Tag text="Full Stack Developer" color="blue" />
          <Tag text="Loves Coding" color="red" />
          <Tag text="Quick to Respond" color="yellow" />
        </div>
      </div>

      <div className="flex flex-col w-full xl:w-1/2 justify-center space-y-6 h-full">
        <div className="flex flex-col justify-center h-full items-center xl:items-start gap-4">
          <div className="flex gap-3 flex-wrap">
            <Tag text="Available for Hire" />
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
            Hi, I'm <span className="text-blue-600">Jingni</span>
          </h1>

          <div className="flex items-center gap-2 text-xl text-gray-700 mt-2">
            <IoIosArrowForward className="text-gray-500" />
            <span className="font-mono">Introduce Myself</span>
          </div>

          <div className="flex flex-col w-full max-w-[600px] justify-center space-y-6 h-full">
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
            icon={<FaArrowRight />}
            variant="primary"
            onClick={() => {
              const section = document.getElementById("projects");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <Button
            text="About Me"
            icon={<FaRegCommentDots />}
            variant="secondary"
            onClick={() => {
              const section = document.getElementById("about");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </main>
  </section>
);

export default HomeSection;
