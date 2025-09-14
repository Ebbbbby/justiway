import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";


/* eslint-disable  @typescript-eslint/no-explicit-any */




sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);



export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const msg = {
      to: "jessicaokafor@justiwaytravelandtours.com",
      from: "jessicaokafor@justiwaytravelandtours.com",
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Failed to send email",
    });
  }
}