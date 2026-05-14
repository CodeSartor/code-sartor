import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CODE_SARTOR_EMAIL,
        pass: process.env.CODE_SARTOR_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Code Sartor Website" <${process.env.CODE_SARTOR_EMAIL}>`,
      to: "codesartor@gmail.com",
      subject: `New Project Request - ${data.projectType}`,
      html: `
        <h2>New Code Sartor Project Request</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>

        <h3>Project Description</h3>
        <p>${data.description}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
  console.error("Email send error:", error);

  return NextResponse.json(
    {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    },
    { status: 500 }
  );
}
}