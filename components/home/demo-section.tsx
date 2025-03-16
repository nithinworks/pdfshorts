import { Pizza } from "lucide-react";
import { SummaryViewer } from "@/components/summaries/summary-viewer";
import { MotionDiv, MotionH3 } from "../common/motion-wrapper";

const DEMO_SUMMARY = `# Quick Overview
• 📚 Comprehensive analysis of "The Psychology of Money" by Morgan Housel

# Document Details
• 📑 Type: Business/Finance Book
• 👥 For: Investors, Finance Enthusiasts, and General Readers

# Key Highlights
• 💡 Money and wealth are deeply psychological
• 🎯 Success with money requires behavior management more than financial knowledge
• 🌟 Long-term thinking is crucial for financial success

# Why It Matters
• 💰 Understanding the psychological aspects of money helps make better financial decisions
• 🧠 Behavioral finance insights can improve investment outcomes
• 🎓 Learning from historical patterns and human behavior in finance

# 📄 Main Points
• 🎨 Everyone has their own unique relationship with money
• 💫 Compounding is about both finances and knowledge
• 🔄 Market cycles and human emotion are interconnected
• 🛡️ Risk management is crucial for long-term success
• 📈 Wealth building is more about behavior than intelligence

# Pro Tips
• ⭐ Focus on reasonable rather than optimal financial decisions
• 💎 Save money to gain control over your time
• 🌟 Plan for things going wrong in your financial life

# Key Terms to Know
• 📚 Behavioral Finance: How psychology affects financial decisions
• 🔍 Compounding: The snowball effect of money and knowledge
• 🎯 Risk Management: Protecting against financial downsides
• 🔄 Market Cycles: Regular patterns in financial markets

# Bottom Line
• 💫 Financial success comes from understanding both numbers and human nature
• 🎯 Good investing is not about making brilliant decisions, but avoiding big mistakes

# 🔥 Final Thoughts
This book transforms complex financial concepts into practical wisdom that anyone can apply to build lasting wealth and financial peace of mind.`;

export default function DemoSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-emerald-50/50">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-emerald-100/80 backdrop-blur-xs border border-emerald-500/20 mb-4">
            <Pizza className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="text-center mb-16">
            <MotionH3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6"
            >
              See how{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                PDF Shorts
              </span>{" "}
              transforms a 256-page book into a digestible summary!
            </MotionH3>
          </div>
        </div>

        <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
          {/** Summary Viewer */}
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SummaryViewer summary={DEMO_SUMMARY} />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
