import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Footer() {
    return (
        <footer className="py-1 md:py-3">
            <div className="flex flex-row items-center justify-between px-4 w-full">
                <div className="text-gray-500 font-bold">
                    Ethan MacLeod
                </div>
                <div className="flex flex-row gap-4">
                    <a href="https://github.com/ethandfmacleod" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
                        <FaGithub className="h-6 w-6" />
                    </a>
                    <a href="mailto:ethandavidfrancis@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
                        <SiGmail className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/macleod-ethan/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
                        <FaLinkedin className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
