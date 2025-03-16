import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string(),
  created_at: z.string().or(z.date()),
  updated_at: z.string().or(z.date()),
  full_name: z.string().nullable(),
  customer_id: z.string().nullable(),
  price_id: z.string().nullable(),
  status: z.string().default("inactive"),
});

export const PdfSummarySchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  original_file_url: z.string(),
  summary_text: z.string(),
  status: z.string().default("completed"),
  title: z.string().nullable(),
  file_name: z.string().nullable(),
  created_at: z.string().or(z.date()),
  updated_at: z.string().or(z.date()),
});

export const PaymentSchema = z.object({
  id: z.string().uuid(),
  amount: z.number(),
  status: z.string(),
  stripe_payment_id: z.string(),
  price_id: z.string(),
  user_email: z.string(),
  created_at: z.string().or(z.date()),
  updated_at: z.string().or(z.date()),
});

export type User = z.infer<typeof UserSchema>;
export type PdfSummary = z.infer<typeof PdfSummarySchema>;
export type Payment = z.infer<typeof PaymentSchema>;
