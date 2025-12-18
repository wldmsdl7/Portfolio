import Button from "../components/Button";
import Tag from "../components/HomeSection/Tag";
import { FaArrowRight, FaRegCommentDots } from "react-icons/fa";
import { TerminalController } from "../components/HomeSection/Terminal";
import { IoIosArrowForward } from "react-icons/io";
import IntroduceItem from "../components/HomeSection/IntroduceItem";
import { INTRODUCE_ITEMS } from "../constants/introduceItem";

const HomeSection = () => (
  <section id="home" className="min-h-screen">
    <main className="flex justify-center items-center min-h-screen px-4">
      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-16 w-full max-w-7xl">
        <div className="flex flex-col items-center xl:items-start w-full xl:w-1/2">
          <div className="h-[480px] w-[640px] max-w-full overflow-y-auto">
            <TerminalController />
          </div>

          <div className="mt-5 flex gap-3 flex-wrap justify-center xl:justify-start">
            <Tag text="Full Stack Developer" color="blue" />
            <Tag text="Loves Coding" color="red" />
            <Tag text="Quick to Respond" color="yellow" />
          </div>
        </div>

        <div className="flex flex-col w-full xl:w-1/2 items-center xl:items-start gap-6">
          <Tag text="Available for Hire" />

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Hi, I'm <span className="text-blue-600">Jingni</span>
          </h1>

          <div className="flex items-center gap-2 text-xl text-gray-700">
            <IoIosArrowForward className="text-gray-500" />
            <span className="font-mono">Introduce Myself</span>
          </div>

          <div className="w-full max-w-[600px] space-y-4">
            {INTRODUCE_ITEMS.map((item, idx) => (
              <IntroduceItem key={idx} title={item.title}>
                {item.content}
              </IntroduceItem>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              text="View Projects"
              icon={<FaArrowRight />}
              variant="primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
            <Button
              text="About Me"
              icon={<FaRegCommentDots />}
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>
      </div>
    </main>
  </section>
);

export default HomeSection;
