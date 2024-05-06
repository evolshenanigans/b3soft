import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Define types for the props of the Section component
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
                        {/* Adjusted the background and text colors */}
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
                        <li> How to code</li>
                        <li> How to learn</li>
                        <li> How to deliver</li>
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
                    <p className="mt-3">
                        <b>Frontend</b>
                    </p>
                    <ul className="leading-9">
                        <li>ReactJS</li>
                        <li>React Native</li>
                        <li>NextJS</li>
                        <li>Tailwind</li>
                    </ul>
                    <p className="mt-3">
                        <b>Backend</b>
                    </p>
                    <ul className="leading-9">
                        <li>NodeJS</li>
                        <li>Python</li>
                        <li>Ruby</li>
                        <li>PostgreSQL</li>
                    </ul>
                    <p className="animate-bounce mt-6">↓ keep scrolling</p>
                </Section>
                <Section opacity={opacityLastSection}>
                    <h1 className="font-semibold font-serif text-2xl">
                        Let's connect?
                    </h1>
                    <p className="text-gray-500">
                        I'm very friendly, I promise
                    </p>
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
