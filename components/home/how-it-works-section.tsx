import { FileText, Sparkles, FileCheck, MoveRight } from "lucide-react";
import {
  MotionDiv,
  MotionH2,
  MotionH3,
} from "@/components/common/motion-wrapper";

type Step = {
  icon: React.ReactNode;
  label: string;
  description: string;
  highlight?: string;
};

const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "Drop Your PDF",
    description: "Simply drag & drop or upload any PDF document",
    highlight: "2 seconds to upload",
  },
  {
    icon: <Sparkles size={64} strokeWidth={1.5} />,
    label: "AI Magic Happens",
    description: "Our AI reads, understands, and extracts key insights",
    highlight: "10x faster than reading",
  },
  {
    icon: <FileCheck size={64} strokeWidth={1.5} />,
    label: "Get Your Summary",
    description: "Receive a clear, structured, and actionable summary",
    highlight: "Save hours of reading",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="py-16 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%-3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-20 sm:left-[calc(40%-30rem)] sm:w-[40.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="text-center mb-20">
          <MotionH2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl uppercase mb-4 text-emerald-600"
          >
            How PDF Shorts Works
          </MotionH2>
          <MotionH3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-3xl lg:text-4xl max-w-2xl mx-auto"
          >
            Three Simple Steps to{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Save Hours
            </span>{" "}
            of Reading
          </MotionH3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => (
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative flex items-stretch"
              key={idx}
            >
              <StepItem {...step} />

              {idx < steps.length - 1 && (
                <MotionDiv
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                  className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                >
                  <MoveRight
                    size={32}
                    strokeWidth={1}
                    className="text-emerald-400"
                  />
                </MotionDiv>
              )}
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ icon, label, description, highlight }: Step) {
  return (
    <div className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group w-full border border-emerald-100/50">
      <div className="flex flex-col gap-6 h-full">
        <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent group-hover:from-emerald-500/20 transition-colors">
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
            {icon}
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-3 justify-between text-center">
          <h4 className="font-bold text-xl">{label}</h4>
          <p className="text-gray-600 text-base">{description}</p>
          {highlight && (
            <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mx-auto mt-2">
              {highlight}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
