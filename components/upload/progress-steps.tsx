"use client";

import { cn } from "@/lib/utils";

interface ProgressStepsProps {
  currentStep: number;
  steps: {
    title: string;
    status: "completed" | "current" | "upcoming";
  }[];
}

export function ProgressSteps({ currentStep, steps }: ProgressStepsProps) {
  return (
    <div className="mt-8 w-full max-w-3xl mx-auto">
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <div key={step.title} className="flex flex-col items-center">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2",
                step.status === "completed" &&
                  "bg-emerald-100 border-emerald-500 text-emerald-600",
                step.status === "current" &&
                  "bg-orange-100 border-orange-500 text-orange-600",
                step.status === "upcoming" &&
                  "bg-gray-100 border-gray-300 text-gray-400"
              )}
            >
              {step.status === "completed" ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={cn(
                "mt-2 text-sm",
                step.status === "completed" && "text-emerald-600",
                step.status === "current" && "text-orange-600",
                step.status === "upcoming" && "text-gray-400"
              )}
            >
              {step.title}
            </span>
          </div>
        ))}
        {/* Progress bar */}
        <div className="absolute top-5 left-0 h-[2px] w-full -z-10">
          <div className="h-full bg-gray-200">
            <div
              className="h-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
