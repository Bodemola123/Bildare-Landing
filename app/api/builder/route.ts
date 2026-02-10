import 'dotenv/config'; // Load environment variables from .env file
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, portfolio, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    await transporter.sendMail({
      from: `"Bildare Builder Form" <${process.env.EMAIL_USER}>`,
      to: "teambildare@gmail.com",
      subject: "New Builder Application",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.5;">
          <h2>New Builder Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Portfolio:</strong> ${portfolio}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Builder email error:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
