import BgGradient from "@/components/common/bg-gradient";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center lg:min-h-[40vh]">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <BgGradient className="from-emerald-500 via-teal-500 to-cyan-500" />
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-500 hover:to-emerald-600",
              footerActionLink: "text-emerald-600 hover:text-emerald-700",
              formFieldInput: "focus:border-emerald-500",
              card: "bg-white/70 backdrop-blur-lg",
            },
          }}
        />
      </div>
    </section>
  );
}
