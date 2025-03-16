import { cn } from "@/lib/utils";
import {
  containerVariants,
  itemVariants,
  pricingPlans,
} from "@/utils/constants";
import { ArrowRight, CheckIcon, Shield, Star } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionSection } from "../common/motion-wrapper";

type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};

const listVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

const PricingCard = ({
  name,
  price,
  description,
  items,
  id,
  paymentLink,
}: PriceType) => {
  return (
    <MotionDiv
      variants={listVariant}
      whileHover={{ scale: 1.02 }}
      className="relative w-full max-w-lg"
    >
      <div
        className={cn(
          "relative flex flex-col h-full gap-6 z-10 p-8 border rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300",
          id === "pro"
            ? "border-emerald-500 shadow-lg hover:shadow-xl border-2"
            : "border-gray-200 hover:border-emerald-200"
        )}
      >
        {id === "pro" && (
          <div className="absolute -right-1 top-6">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-4 py-1.5 rounded-l-full flex items-center gap-1.5 shadow-lg">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Most Popular</span>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">{name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-gray-500">/month</span>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>

        <ul className="flex flex-col gap-4 flex-grow">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={paymentLink}
          className={cn(
            "w-full rounded-xl flex items-center justify-center gap-2 py-3 font-medium transition-all duration-300",
            id === "pro"
              ? "bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-500 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl"
              : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
          )}
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </MotionDiv>
  );
};

export default function PricingSection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden"
      id="pricing"
    >
      <div className="py-16 lg:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          variants={itemVariants}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-base font-semibold leading-7 text-emerald-600 uppercase">
            Pricing
          </h2>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choose the Perfect Plan for Your Needs
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start with our free plan and upgrade anytime to unlock more features
          </p>
        </MotionDiv>

        <div className="relative flex flex-col items-center">
          <div className="flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8 w-full">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} {...plan} />
            ))}
          </div>

          {/* Stripe security badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
            <Shield className="w-4 h-4" />
            <span>Secured by Stripe</span>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
