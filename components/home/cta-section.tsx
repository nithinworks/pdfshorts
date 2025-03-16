import { Button } from "@/components/ui/button";
import { FileText, Zap } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
          {/* Decorative elements */}
          <div
            className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-emerald-400 to-teal-400 opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transform Your Reading Experience
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Start Summarizing Today
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join thousands of professionals saving hours with AI-powered PDF
              summaries. No more information overload – just clear, concise
              insights.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-500 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                  <FileText className="mr-2 h-4 w-4" />
                  Start Summarizing
                </Button>
              </Link>
              <Link href="/#pricing">
                <Button
                  variant="outline"
                  className="border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  View Plans
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Competitive Pricing • Secured by Stripe • Cancel anytime
            </p>
          </div>

          {/* Bottom decorative element */}
          <div
            className="absolute -bottom-24 left-0 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-l from-teal-400 to-emerald-400 opacity-25"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
