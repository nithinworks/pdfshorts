import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionSection,
  MotionSpan,
} from "@/components/common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";
import BgGradient from "../common/bg-gradient";

const buttonVariants = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

export default function HeroSection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto flex flex-col z-0 items-center justify-center py-24 sm:py-32 lg:pb-40 transition-all animate-in lg:px-12 max-w-7xl"
    >
      {/* Background Gradients */}
      <BgGradient className="opacity-30" />
      <BgGradient className="rotate-180 translate-y-[25rem] opacity-20" />

      <MotionDiv
        variants={itemVariants}
        className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-emerald-200 via-emerald-500 to-teal-600 animate-gradient-x group"
      >
        <Badge
          variant={"secondary"}
          className="relative px-6 py-2 text-base font-medium bg-white/90 backdrop-blur-sm rounded-full group-hover:bg-white/95 transition-colors duration-200"
        >
          <Sparkles className="h-6 w-6 mr-2 text-emerald-600 animate-pulse" />
          <p className="text-base text-emerald-600">
            AI-Powered Document Analysis
          </p>
        </Badge>
      </MotionDiv>
      <MotionH1
        variants={itemVariants}
        className="font-bold py-6 text-center text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-4xl"
      >
        Turn Complex Documents into{" "}
        <span className="relative inline-block">
          <MotionSpan
            whileHover={buttonVariants}
            className="relative z-10 px-2"
          >
            actionable
          </MotionSpan>
          <span
            className="absolute inset-0 bg-emerald-200/50 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>{" "}
        insights in seconds
      </MotionH1>
      <MotionH2
        variants={itemVariants}
        className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600 mt-4"
      >
        Experience the future of document comprehension. Our AI transforms
        lengthy documents into clear, structured summaries that help you make
        better decisions faster.
      </MotionH2>
      <MotionDiv variants={itemVariants} whileHover={buttonVariants}>
        <Button
          variant={"link"}
          className="text-white mt-12 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-500 hover:to-emerald-600 hover:no-underline font-bold shadow-lg transition-all duration-300"
        >
          <Link href="/#pricing" className="flex gap-2 items-center">
            <span>Start Summarizing Free</span>
            <ArrowRight className="animate-pulse" />
          </Link>
        </Button>
      </MotionDiv>

      {/* Additional decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </MotionSection>
  );
}
