import BgGradient from "@/components/common/bg-gradient";
import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";
import { hasReachedUploadLimit } from "@/lib/user";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { MotionDiv } from "@/components/common/motion-wrapper";
import { containerVariants } from "@/utils/constants";

export const maxDuration = 60;

export default async function Page() {
  const user = await currentUser();

  if (!user?.id) {
    redirect("/sign-in");
  }

  const userId = user.id;

  const { hasReachedLimit } = await hasReachedUploadLimit({
    userId,
    email: user.emailAddresses?.[0]?.emailAddress,
  });

  if (hasReachedLimit) {
    redirect("/dashboard");
  }

  return (
    <section className="min-h-screen relative">
      <BgGradient className="from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl px-4 py-16 sm:py-24 lg:px-8"
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 w-full border border-emerald-100 shadow-lg">
            <UploadHeader />
            <UploadForm />
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}
