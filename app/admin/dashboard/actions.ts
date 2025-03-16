"use server";

import { getDbConnection } from "@/lib/db";
import { UserSchema, PdfSummarySchema, PaymentSchema } from "@/lib/db/schema";

export async function getAdminData() {
  const db = await getDbConnection();

  try {
    const usersResult = await db`
      SELECT * FROM users 
      ORDER BY created_at DESC
    `;

    const summariesResult = await db`
      SELECT * FROM pdf_summaries 
      ORDER BY created_at DESC 
      LIMIT 100
    `;

    const paymentsResult = await db`
      SELECT * FROM payments 
      ORDER BY created_at DESC 
      LIMIT 100
    `;

    // Parse dates and validate data
    const users = usersResult.map((user) => ({
      ...user,
      created_at: new Date(user.created_at),
      updated_at: new Date(user.updated_at),
      full_name: user.full_name || null,
      customer_id: user.customer_id || null,
      price_id: user.price_id || null,
      status: user.status || "inactive",
    }));

    const summaries = summariesResult.map((summary) => ({
      ...summary,
      created_at: new Date(summary.created_at),
      updated_at: new Date(summary.updated_at),
      title: summary.title || null,
      file_name: summary.file_name || null,
      status: summary.status || "completed",
    }));

    const payments = paymentsResult.map((payment) => ({
      ...payment,
      created_at: new Date(payment.created_at),
      updated_at: new Date(payment.updated_at),
    }));

    // Validate data against schemas
    const validUsers = users.map((user) => UserSchema.parse(user));
    const validSummaries = summaries.map((summary) =>
      PdfSummarySchema.parse(summary)
    );
    const validPayments = payments.map((payment) =>
      PaymentSchema.parse(payment)
    );

    return {
      users: validUsers,
      summaries: validSummaries,
      payments: validPayments,
      stats: {
        totalUsers: validUsers.length,
        totalSummaries: validSummaries.length,
        totalRevenue:
          validPayments.reduce((acc, payment) => acc + payment.amount, 0) / 100,
        activeSubscriptions: validUsers.filter(
          (user) => user.status === "active"
        ).length,
      },
    };
  } catch (error) {
    console.error("Error in getAdminData:", error);
    throw error;
  }
}
