import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Send notification to you
    await resend.emails.send({
      from: "Bildare <onboarding@resend.dev>",
      to: "teambildare@gmail.com",
      subject: "New Waitlist Signup 🚀",
      html: `<h2>New Waitlist Signup</h2><p>Email: <strong>${email}</strong></p>`,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: "Bildare <onboarding@resend.dev>",
      to: email,
      subject: "You're on the Bildare Waitlist 🎉",
      html: `<h2>Welcome to Bildare 🚀</h2><p>You're officially on our early access list.</p><p>We'll notify you when we launch.</p><br/><p>– Team Bildare</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}