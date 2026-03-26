import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, portfolio, message } = await req.json();

    await resend.emails.send({
      from: "Bildare Builder Form <onboarding@resend.dev>", // use your domain here once verified
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