"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        My career journey includes impactful roles ranging from a{" "}
        <span className="font-medium">Frontend Vue Developer</span>
        to a <span className="font-medium">Full Stack Python Developer</span>,
        where I honed my skills in building intuitive user experiences and
        robust back-end functionalities, collaborating with cross-functional
        teams to bring innovative ideas to life. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Vue, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I{" "}
        <span className="underline">believe</span> in life-long learning and
        always try to find more efficient ways of doing something. I am
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        I find balance and inspiration in{" "}
        <span className="italic">my off-screen life </span> through the
        nurturing of my indoor garden and the creative exploration of watercolor
        painting. These hobbies enhance my{" "}
        <span className="font-medium">
          attention to detail and creative thinking
        </span>
        , skills I seamlessly integrate into my front-end development work.
      </p>
    </motion.section>
  );
}

// My career journey includes impactful roles ranging from a Frontend Vue Developer to a Full Stack Python Developer, where I honed my skills in building intuitive user experiences and robust back-end functionalities, collaborating with cross-functional teams to bring innovative ideas to life."

// I find balance and inspiration in my off-screen life through the nurturing of my indoor garden and the creative exploration of watercolor painting. These hobbies enhance my attention to detail and creative thinking, skills I seamlessly integrate into my front-end development work.

// "Beyond my technical expertise, my time away from coding is dedicated to nurturing my love for botanical watercolor painting and gardening, enriching my creative vision and attention to detail, which I bring into every project I undertake."

// "With a strong foundation in diverse programming languages and technologies, backed by a commitment to continuous learning and personal growth, I am eager to contribute my expertise to a dynamic team and take on new challenges in the ever-evolving world of technology.
