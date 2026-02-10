import 'dotenv/config'; // Load environment variables from .env file
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send notification to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "teambildare@gmail.com",
      subject: "New Waitlist Signup 🚀",
      html: `<h2>New Waitlist Signup</h2><p>Email: <strong>${email}</strong></p>`,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "You're on the Bildare Waitlist 🎉",
      html: `<h2>Welcome to Bildare 🚀</h2><p>You're officially on our early access list.</p><p>We’ll notify you when we launch.</p><br/><p>– Team Bildare</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API Error:", error); // <-- add this
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

