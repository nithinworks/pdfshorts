import { Book, Briefcase, GraduationCap, Newspaper } from "lucide-react";
import {
  MotionDiv,
  MotionH2,
  MotionH3,
  MotionSection,
} from "../common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";

const useCases = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Students",
    description:
      "Quickly digest academic papers, research documents, and textbooks to enhance your learning efficiency.",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Professionals",
    description:
      "Stay on top of industry reports, legal documents, and business proposals with concise summaries.",
  },
  {
    icon: <Book className="w-8 h-8" />,
    title: "Researchers",
    description:
      "Extract key insights from academic papers and research documents quickly and efficiently.",
  },
  {
    icon: <Newspaper className="w-8 h-8" />,
    title: "Content Creators",
    description:
      "Transform long-form content into digestible summaries for your audience.",
  },
];

export default function UseCasesSection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="relative py-16 lg:py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MotionH2
            variants={itemVariants}
            className="text-xl font-bold text-emerald-600 mb-4 uppercase"
          >
            Who Can Use Sommaire
          </MotionH2>
          <MotionH3
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold"
          >
            Perfect for Everyone Who Reads
          </MotionH3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {useCases.map((useCase, index) => (
            <MotionDiv
              key={index}
              variants={itemVariants}
              className="p-6 rounded-2xl border border-emerald-100 bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
                  {useCase.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
