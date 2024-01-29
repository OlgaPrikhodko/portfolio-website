import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // hook will tell if this section is in the view
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [sectionName, inView, setActiveSection, timeOfLastClick]);

  return { ref };
}
