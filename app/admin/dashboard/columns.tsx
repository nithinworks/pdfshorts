"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { User, PdfSummary, Payment } from "@/lib/db/schema";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "email" as keyof User,
    header: "Email",
  },
  {
    accessorKey: "full_name" as keyof User,
    header: "Name",
    cell: ({ row }) => row.getValue("full_name") || "N/A",
  },
  {
    accessorKey: "status" as keyof User,
    header: "Status",
    cell: ({ row }) => (
      <Badge
        className={
          row.getValue("status") === "active"
            ? "bg-emerald-100 text-emerald-800"
            : "bg-gray-100 text-gray-800"
        }
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Joined",
    cell: ({ row }) =>
      format(new Date(row.getValue("created_at")), "MMM d, yyyy"),
  },
];

export const summaryColumns: ColumnDef<PdfSummary>[] = [
  {
    accessorKey: "title" as keyof PdfSummary,
    header: "Title",
    cell: ({ row }) =>
      (row.getValue("title") as string) ||
      (row.getValue("file_name") as string) ||
      "Untitled",
  },
  {
    accessorKey: "status" as keyof PdfSummary,
    header: "Status",
    cell: ({ row }) => (
      <Badge
        className={
          row.getValue("status") === "completed"
            ? "bg-emerald-100 text-emerald-800"
            : "bg-amber-100 text-amber-800"
        }
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    accessorKey: "created_at" as keyof PdfSummary,
    header: "Created",
    cell: ({ row }) =>
      format(new Date(row.getValue("created_at")), "MMM d, yyyy"),
  },
];

export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "user_email" as keyof Payment,
    header: "User",
  },
  {
    accessorKey: "amount" as keyof Payment,
    header: "Amount",
    cell: ({ row }) =>
      `$${((row.getValue("amount") as number) / 100).toFixed(2)}`,
  },
  {
    accessorKey: "status" as keyof Payment,
    header: "Status",
    cell: ({ row }) => (
      <Badge
        className={
          row.getValue("status") === "complete"
            ? "bg-emerald-100 text-emerald-800"
            : "bg-red-100 text-red-800"
        }
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    accessorKey: "created_at" as keyof Payment,
    header: "Date",
    cell: ({ row }) =>
      format(new Date(row.getValue("created_at")), "MMM d, yyyy"),
  },
];

export const columns = {
  users: userColumns,
  summaries: summaryColumns,
  payments: paymentColumns,
} as const;
