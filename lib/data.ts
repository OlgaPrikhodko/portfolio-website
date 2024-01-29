import React from "react";
import { FaPython, FaReact, FaVuejs } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { TbDeviceDesktopAnalytics, TbDevicesDollar } from "react-icons/tb";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Python Developer",
    location: "Kyiv, Ukraine",
    description:
      "Managed inner technological processes related to document processing. Notable achievement includes creating a feature that connected court decisions with legislative acts and with each other, which means parsing documents for some key words, collecting that data in DB and making requests to get connections.",
    icon: React.createElement(FaPython),
    date: "Nov 2007 - Nov 2011",
  },
  {
    title: "Python Desktop Application Developer",
    location: "Kyiv, Ukraine",
    description:
      "Developed a desktop interface for working with regulatory databases from scratch using Python and PyQT.",
    icon: React.createElement(TbDeviceDesktopAnalytics),
    date: "Nov 2011 - May 2015",
  },
  {
    title: "Full Stack Python Developer",
    location: "Kyiv, Ukraine",
    description:
      "Created, improved, and maintained features. Collaborated with various teams including UX/UI, QA, payment, marketing and advertising. Successfully implemented key features, like Seller Page, Favourites, and Create CV Form from scratch (front-end and back-end parts).",
    icon: React.createElement(TbDevicesDollar),
    date: "May 2015 – Aug 2017",
  },
  {
    title: "Frontend Vue Developer",
    location: "Kyiv, Ukraine",
    description:
      "Responsible for implementing new features and improving existing ones in Vue. Collaborated with UX/UI designers, QA, analysts, and marketing teams. Also involved in redesigning projects in Vue and writing Cypress tests for quality code.",
    icon: React.createElement(FaVuejs),
    date: "Oct 2018 – Apr 2019",
  },
  {
    title: "Software Engineer Return Program",
    location: "Manchester, UK",
    description:
      "Coding and technical development training, aimed at preparing for re-entry into the tech industry. The course included labs, projects, and concluded with a group full-stack project.",
    icon: React.createElement(FaReact),
    date: "Nov 2022 - Mar 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "React Testing Library",
  "Jest",
  "Framer Motion",
] as const;
