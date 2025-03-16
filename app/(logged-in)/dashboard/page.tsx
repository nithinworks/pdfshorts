import BgGradient from "@/components/common/bg-gradient";
import {
  MotionDiv,
  MotionH1,
  MotionP,
} from "@/components/common/motion-wrapper";
import EmptySummaryState from "@/components/summaries/empty-summary-state";
import SummaryCard from "@/components/summaries/summary-card";
import { Button } from "@/components/ui/button";
import { getSummaries } from "@/lib/summaries";
import { hasReachedUploadLimit } from "@/lib/user";
import { itemVariants } from "@/utils/constants";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, Plus, FileText } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();
  const userId = user?.id;

  if (!userId) {
    return redirect("/sign-in");
  }

  const email = user?.emailAddresses?.[0]?.emailAddress;

  const { hasReachedLimit, uploadLimit } = await hasReachedUploadLimit({
    userId,
    email,
  });

  const summaries = await getSummaries(userId);
  return (
    <main className="min-h-screen relative">
      <BgGradient className="from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex flex-col gap-4"
      >
        <div className="px-4 py-12 sm:py-24">
          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-start">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center h-[42px] w-[42px]">
                  <FileText className="w-6 h-6" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-none flex items-center">
                  Your Summaries
                </h1>
              </div>
              <MotionP
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="text-gray-600 text-lg"
              >
                Transform your PDFs into concise, actionable insights
              </MotionP>
            </div>
            {!hasReachedLimit && (
              <MotionDiv
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                className="self-start"
              >
                <Button
                  variant="link"
                  className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-500 hover:to-emerald-600 transition-all duration-300 group hover:no-underline shadow-lg hover:shadow-xl"
                >
                  <Link href="/upload" className="flex items-center text-white">
                    <Plus className="w-5 h-5 mr-2" />
                    New Summary
                  </Link>
                </Button>
              </MotionDiv>
            )}
          </div>

          {hasReachedLimit && (
            <MotionDiv
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-emerald-800">
                <p className="text-sm md:text-base">
                  You've reached the limit of {uploadLimit} uploads on the Basic
                  plan.{" "}
                  <Link
                    href="/#pricing"
                    className="text-emerald-700 font-medium hover:text-emerald-800 inline-flex items-center gap-1 underline-offset-4 hover:underline"
                  >
                    Upgrade to Pro for unlimited uploads
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </p>
              </div>
            </MotionDiv>
          )}

          {summaries.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full text-center space-y-6 border border-emerald-100">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    No summaries yet
                  </h3>
                  <p className="text-gray-600">
                    Upload your first PDF to get started with AI-powered
                    summaries.
                  </p>
                </div>
                <Link
                  href="/upload"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-500 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Plus className="w-5 h-5" />
                  Create Your First Summary
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
              {summaries.map((summary, index) => (
                <SummaryCard key={index} summary={summary} />
              ))}
            </div>
          )}
        </div>
      </MotionDiv>
    </main>
  );
}
