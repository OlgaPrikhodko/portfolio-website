"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill) => (
          <li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
