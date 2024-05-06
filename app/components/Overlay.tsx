import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import {
    FaReact,
    FaNodeJs,
    FaLinkedin,
    FaPython,
    FaGem,
    FaGithub,
    FaCube,
    FaCode,
    FaBookReader,
    FaTruck,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTypescript,
    SiPostgresql,
    SiBlender,
    SiPytorch,
    SiPandas,
    SiNumpy,
} from "react-icons/si";

type SectionProps = {
    right?: boolean;
    opacity: number;
    children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
    right = false,
    opacity,
    children,
}) => {
    return (
        <section
            className={`h-screen flex flex-col justify-center p-10 ${
                right ? "items-end" : "items-start"
            }`}
            style={{
                opacity: opacity,
            }}
        >
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-gray-200 rounded-lg px-8 py-12 text-gray-800">
                        {" "}
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Overlay: React.FC = () => {
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);

    useFrame(() => {
        setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
        setOpacitySecondSection(scroll.curve(1 / 3, 2 / 3));
        setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
    });

    return (
        <Scroll html>
            <div className="w-screen">
                <Section opacity={opacityFirstSection}>
                    <h1 className="font-semibold font-serif text-2xl">
                        Hello, I'm Josh
                    </h1>
                    <p className="text-gray-500">Welcome to my portfolio</p>
                    <p className="mt-3">I know:</p>
                    <ul className="leading-9">
                        <div className="flex items-center space-x-2 mb-2">
                            <FaCode className="text-2xl" />
                            <span>How to code</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <FaBookReader className="text-2xl" />
                            <span>How to learn</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <FaTruck className="text-2xl" />
                            <span>How to deliver</span>
                        </div>
                    </ul>
                    <p className="animate-bounce mt-6">↓ scroll down</p>
                </Section>
                <Section right opacity={opacitySecondSection}>
                    <h1 className="font-semibold font-serif text-2xl">
                        Here are my skillsets
                    </h1>
                    <p className="text-gray-500">
                        PS: I am always learning come back for more
                    </p>
                    <div>
                        <h2 className="font-bold text-lg">
                            Front-End Technologies
                        </h2>
                        <div className="flex items-center space-x-2 mb-2">
                            <FaReact className="text-2xl" />
                            <span>React</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <SiJavascript className="text-2xl" />
                            <span>JavaScript (ES6+)</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <SiTypescript className="text-2xl" />
                            <span>TypeScript</span>
                        </div>

                        <h2 className="font-bold text-lg mt-4">
                            Back-End Technologies
                        </h2>
                        <div className="flex items-center space-x-2 mb-2">
                            <FaNodeJs className="text-2xl" />
                            <span>Node.js</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <SiPostgresql className="text-2xl" />
                            <span>PostgreSQL</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <FaPython className="text-2xl" />
                            <span>Python</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <FaGem className="text-2xl" />
                            <span>Ruby</span>
                        </div>
                        <h2 className="font-bold text-lg">
                            Design Technologies
                        </h2>
                        <div className="flex items-center space-x-2 mb-2">
                            <SiBlender className="text-2xl" />
                            <span>Blender</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <FaCube className="text-2xl" />
                            <span>Spline</span>
                        </div>
                        <h2 className="font-bold text-lg">Machine Learning</h2>
                        <div className="flex items-center space-x-2 mb-2">
                            <SiPytorch className="text-2xl" />
                            <span>Pytorch</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <SiPandas className="text-2xl" />
                            <span>Pandas</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <SiNumpy className="text-2xl" />
                            <span>NumPy</span>
                        </div>
                    </div>
                    <p className="animate-bounce mt-6">↓ keep scrolling</p>
                </Section>
                <Section opacity={opacityLastSection}>
                    <h1 className="font-semibold font-serif text-2xl">
                        Let's connect?
                    </h1>
                    <p className="text-gray-500">
                        I'm very friendly, I promise
                    </p>
                    <p>
                        This is a work in progress. Keep returning for future
                        features such as:
                    </p>
                    <ul className="list-disc pl-4">
                        <li>Day in my life</li>
                        <li>Projects I'm currently working on</li>
                    </ul>
                    <div className="mt-6 p-3 bg-slate-200 rounded-lg">
                        <a
                            href="https://www.linkedin.com/in/gjgutierrez/"
                            className="text-black font-semibold flex items-center"
                        >
                            <FaLinkedin className="mr-2" /> LinkedIn
                        </a>
                        <a
                            href="https://www.github.com/evolshenanigans"
                            className="text-black font-semibold flex items-center mt-2"
                        >
                            <FaGithub className="mr-2" /> Github
                        </a>
                    </div>
                </Section>
            </div>
        </Scroll>
    );
};
