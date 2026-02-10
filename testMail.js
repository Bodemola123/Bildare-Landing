import 'dotenv/config';
import nodemailer from 'nodemailer';

async function testMail() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,       // 465 for SSL/TLS, 587 for STARTTLS
    secure: false,    // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // your 16-char App Password
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "teambildare@gmail.com",
    subject: "Test Email",
    text: "This is a test",
  });

  console.log("Email sent!");
}

testMail().catch(console.error);
