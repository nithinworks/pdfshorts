import { isDev } from "./helpers";

export const pricingPlans = [
  {
    name: "Basic",
    price: 9,
    description: "Perfect for individuals who want to save time reading PDFs",
    items: [
      "5 AI-powered PDF summaries per month",
      "Key insights extraction",
      "Smart bullet points generation",
      "Friendly email support",
      "Mobile-friendly summaries",
    ],
    id: "basic",
    paymentLink: isDev
      ? "https://buy.stripe.com/test_bIYg2D13JbDC8jSfZ6"
      : "https://buy.stripe.com/test_bIYg2D13JbDC8jSfZ6",
    priceId: isDev
      ? "price_1R3Ce0SGsETocz7J1Wk6emvf"
      : "price_1R3Ce0SGsETocz7J1Wk6emvf",
  },
  {
    name: "Pro",
    price: 29,
    description: "Supercharge your productivity with unlimited summaries",
    items: [
      "Unlimited AI summaries",
      "Priority processing speed",
      "Advanced insights extraction",
      "Custom summary lengths",
      "Unlimited Exports",
      "24/7 priority support",
    ],
    id: "pro",
    paymentLink: isDev
      ? "https://buy.stripe.com/test_cN2aIj27NePOcA89AJ"
      : "https://buy.stripe.com/test_cN2aIj27NePOcA89AJ",
    priceId: isDev
      ? "price_1R3F0gSGsETocz7JQ1aGyrjs"
      : "price_1R3F0gSGsETocz7JQ1aGyrjs",
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
      duration: 0.8,
    },
  },
};

export const ORIGIN_URL = isDev
  ? "http://localhost:3000"
  : "https://summarize.so";
