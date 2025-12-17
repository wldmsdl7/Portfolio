export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex text-xl font-bold text-gray-600 items-center">
            <span>
              <img src="src/assets/Profile/githubImg.PNG" className="size-15" />
            </span>{" "}
            wldmsdl7
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600">
              Skills
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
