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
        <span className="font-medium">Full Stack Python Developer</span> to a{" "}
        <span className="font-medium">Frontend Vue Developer</span>, where I
        honed my skills in building intuitive user experiences and robust
        back-end functionalities, collaborating with cross-functional teams to
        bring innovative ideas to life. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Vue, Nuxt.js and TypeScript
        </span>
        . I am also familiar with Node.js, MongoDB, Prisma and Vitest (Jest,
        Testing Library, TDD). I <span className="underline">believe</span> in
        life-long learning and always try to find more efficient ways of doing
        something. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a{" "}
        <span className="font-medium">software developer</span>.
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
