import BgGradient from "@/components/common/bg-gradient";
import {
  MotionDiv,
  MotionH1,
  MotionP,
} from "@/components/common/motion-wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { itemVariants } from "@/utils/constants";
import { FileText } from "lucide-react";

function HeaderSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-start">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600">
            <FileText className="w-6 h-6" />
          </div>
          <MotionH1
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="text-3xl md:text-4xl font-bold"
          >
            <Skeleton className="h-10 w-48" />
          </MotionH1>
        </div>
        <MotionP variants={itemVariants} initial="hidden" animate="visible">
          <Skeleton className="h-6 w-96" />
        </MotionP>
      </div>
      <MotionDiv
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="self-start"
      >
        <Skeleton className="h-10 w-32 rounded-full" />
      </MotionDiv>
    </div>
  );
}

function SummaryCardSkeleton() {
  return (
    <MotionDiv
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="rounded-xl border bg-white/50 backdrop-blur-sm shadow-lg p-6"
    >
      <Skeleton className="h-48 w-full rounded-lg" />
    </MotionDiv>
  );
}

export default function LoadingSummaries() {
  return (
    <div className="min-h-screen relative">
      <BgGradient className="from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
      <section className="container px-4 py-12 sm:py-24 mx-auto flex flex-col gap-4">
        <HeaderSkeleton />
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
          {Array.from({ length: 3 }).map((_, index) => (
            <SummaryCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
