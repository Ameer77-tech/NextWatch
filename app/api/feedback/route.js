// app/api/feedback/route.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.EMAIL_KEY);

export async function POST(req) {
  try {
    const { message } = await req.json();
    const email = {
      to: process.env.ADMIN,
      from: {
        email: process.env.EMAIL,
        name: "Next Watch",
      },
      subject: "CUSTOMER FEEDBACK FOR NEXT WATCH APPLICATION",
      html: `
  <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; padding: 40px 0;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); overflow: hidden;">
      
      <div style="background: linear-gradient(90deg, #0d6efd, #6610f2); padding: 20px; color: #ffffff; text-align: center;">
        <h1 style="margin: 0; font-size: 22px; letter-spacing: 1px;">Next Watch Feedback</h1>
      </div>

      <div style="padding: 24px;">
        <p style="font-size: 16px; color: #333333; margin-bottom: 12px;">Hi Admin,</p>
        <p style="font-size: 15px; color: #555555; line-height: 1.6;">
          You’ve received a new feedback message from a user:
        </p>

        <div style="margin: 20px 0; padding: 16px; background-color: #f8f9fa; border-left: 4px solid #0d6efd; border-radius: 8px;">
          <p style="font-size: 15px; color: #222; white-space: pre-line; margin: 0;">${message}</p>
        </div>

        <p style="font-size: 14px; color: #777777;">Please review and respond as needed.</p>
      </div>

      <div style="background-color: #f1f3f5; padding: 12px; text-align: center; font-size: 12px; color: #999999;">
        &copy; ${new Date().getFullYear()} Next Watch. All rights reserved.
      </div>
    </div>
  </div>
  `,
    };

    const response = await sgMail.send(email);
    console.log("Email sent:", response[0].statusCode);

    return Response.json({ success: true });
  } catch (error) {
    console.log("Error sending email:", error.response.body.errors[0].message);
    return Response.json(
      { success: false, error: error.response.body.errors[0].message },
      { status: 500 }
    );
  }
}
