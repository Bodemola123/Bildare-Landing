import 'dotenv/config'; // Load environment variables from .env file
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FeedbackData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message }: FeedbackData = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Bildare Feedback" <${process.env.EMAIL_USER}>`,
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error:unknown) {
    return NextResponse.json({ error: "Failed to send feedback" }, { status: 500 });
  }
}
