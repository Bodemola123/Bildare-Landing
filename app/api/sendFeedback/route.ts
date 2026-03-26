import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface FeedbackData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message }: FeedbackData = await req.json();

    await resend.emails.send({
      from: "Bildare Feedback <onboarding@resend.dev>",
      to: "teambildare@gmail.com",
      replyTo: email,
      subject: `Feedback Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.5;">
          <h2>New Feedback Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Feedback email error:", error);
    return NextResponse.json(
      { error: "Failed to send feedback" },
      { status: 500 }
    );
  }
}