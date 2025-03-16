import { ArrowRight, Sparkles } from "lucide-react";
import BgGradient from "./bg-gradient";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UpgradeRequired() {
  return (
    <div className="relative min-h-[50vh]">
      <BgGradient className="from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
      <div className="container px-8 py-16">
        <div className="flex flex-col items-center justify-center gap-8 text-center max-w-2xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Pro Feature
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            Unlock{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Advanced Features
            </span>
          </h1>

          <div className="space-y-4 max-w-xl">
            <p className="text-lg leading-8 text-gray-600">
              Upgrade to access premium features and get more out of Short My
              PDF:
            </p>
            <ul className="text-left space-y-3 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-emerald-100">
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                Unlimited PDF summaries
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                Priority processing
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                Advanced customization options
              </li>
            </ul>
          </div>

          <Button
            asChild
            className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-500 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link
              href="/#pricing"
              className="flex gap-2 items-center px-6 py-6"
            >
              Upgrade Now <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
