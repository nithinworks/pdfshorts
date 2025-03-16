import {
  MotionDiv,
  MotionH2,
  MotionH3,
  MotionSection,
} from "../common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "PDF Shorts has completely transformed how I process academic papers. What used to take hours now takes minutes.",
    author: "Sarah Chen",
    role: "PhD Researcher",
  },
  {
    quote:
      "As a busy executive, I need to stay informed but time is precious. This tool has become indispensable for my daily workflow.",
    author: "Michael Rodriguez",
    role: "CEO, TechFlow Inc",
  },
  {
    quote:
      "The accuracy and clarity of the summaries are impressive. It's like having a personal research assistant.",
    author: "Dr. James Wilson",
    role: "Professor of Computer Science",
  },
];

export default function TestimonialsSection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-emerald-50/50 to-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MotionH2
            variants={itemVariants}
            className="text-xl font-bold text-emerald-600 mb-4 uppercase"
          >
            Testimonials
          </MotionH2>
          <MotionH3
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold"
          >
            Trusted by Professionals Worldwide
          </MotionH3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <MotionDiv
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-emerald-500 mb-4" />
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-emerald-600">{testimonial.role}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
