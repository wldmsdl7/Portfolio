import { CommitMessage } from "../components/AboutmeSection/CommitMessage";

const AboutSection = () => (
  <section id="about" className="min-h-screen scroll-mt-16 p-8">
    <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/3 w-full">
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className="text-gray-600 leading-relaxed">
          I am a passionate developer who loves building scalable applications
          and learning new technologies...
        </p>
      </div>

      <div className="lg:w-2/3 w-full">
        <CommitMessage />
      </div>
    </div>
  </section>
);

export default AboutSection;
