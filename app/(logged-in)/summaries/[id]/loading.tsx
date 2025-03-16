import BgGradient from "@/components/common/bg-gradient";
import { Skeleton } from "@/components/ui/skeleton";
import LoadingSkeleton from "@/components/upload/loading-skeleton";
import { FileText } from "lucide-react";

function HeaderSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-4">
        <Skeleton className="h-8 w-32 rounded-full bg-emerald-100/80" />
        <Skeleton className="h-5 w-40 rounded-full bg-emerald-100/80" />
      </div>
      <Skeleton className="h-12 w-3/4 rounded-full bg-emerald-100/80" />
    </div>
  );
}

export default function LoadingSummary() {
  return (
    <div className="relative isolate min-h-screen">
      <BgGradient className="from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
      <div className="container mx-auto flex flex-col gap-4">
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-24">
          <div className="flex flex-col gap-8">
            <HeaderSkeleton />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <Skeleton className="h-4 w-4 bg-emerald-100/80" />
                <Skeleton className="w-12 h-6 bg-emerald-100/80" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="w-12 h-6 bg-emerald-100/80" />
                <Skeleton className="w-12 h-6 bg-emerald-100/80" />
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="relative p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-lg">
                {/** Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-transparent opacity-50 rounded-2xl" />

                {/** Icon */}
                <div className="absolute top-4 right-4 text-emerald-300/20">
                  <Skeleton className="h-3 w-3 sm:h-4 sm:w-4 bg-emerald-100/80" />
                </div>

                <div className="relative">
                  <LoadingSkeleton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
