"use client";
import MePhoto from "@/public/me.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={MePhoto}
              alt="Olha Prykhodko"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-3xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Olha</span>, an experienced
        <span className="font-bold"> full-stack developer </span>
        focused on front-end development, passionate about{" "}
        <span className="font-italic">
          creating high-performance, user-centric products
        </span>
        . Proficient in <span className="underline">Vue and Python</span>, with
        recent upskilling in{" "}
        <span className="underline">TypeScript, and React</span>.
      </motion.p>
    </section>
  );
}
