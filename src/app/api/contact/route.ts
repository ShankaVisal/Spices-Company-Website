import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // Parse incoming JSON data from form
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 });
    }

    // Configure Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // 16-digit App Password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.EMAIL_USER}>`,
      to: "shankavisal@gmail.com", // receiving email
      subject: "New Contact Form Inquiry - Devi Products",
      html: `
        <h2>New Inquiry from Devi Products Website</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Success response
    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}


// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { MongoClient, ServerApiVersion } from "mongodb";

// const MONGODB_URI = process.env.MONGO_URI;
// const EMAIL_USER = process.env.EMAIL_USER;
// const EMAIL_PASS = process.env.EMAIL_PASS;

// // Safety checks
// if (!MONGODB_URI) throw new Error("MONGO_URI is not defined in .env.local");
// if (!EMAIL_USER || !EMAIL_PASS) throw new Error("EMAIL_USER or EMAIL_PASS is not defined in .env.local");

// // MongoDB client
// const client = new MongoClient(MONGODB_URI, {
//   serverApi: ServerApiVersion.v1,
//   tls: true,                  // ensures TLS connection
//   tlsAllowInvalidCertificates: false, // keep false for production
// });

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { firstName, lastName, email, message } = body;

//     if (!firstName || !lastName || !email || !message) {
//       return NextResponse.json(
//         { success: false, error: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     // 1️⃣ Save inquiry to MongoDB
//     await client.connect();
//     const db = client.db("devi_contact");
//     const collection = db.collection("inquiries");
//     await collection.insertOne({
//       firstName,
//       lastName,
//       email,
//       message,
//       createdAt: new Date(),
//     });

//     // 2️⃣ Send email via Gmail
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: { user: EMAIL_USER, pass: EMAIL_PASS },
//     });

//     await transporter.sendMail({
//       from: `"Website Inquiry" <${EMAIL_USER}>`,
//       to: "shankavisal@gmail.com",
//       subject: "New Contact Form Inquiry - Devi Products",
//       html: `
//         <h2>New Inquiry from Devi Products Website</h2>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true, message: "Email sent and data saved!" });
//   } catch (error) {
//     console.error("Error sending/saving inquiry:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to send/save inquiry" },
//       { status: 500 }
//     );
//   } finally {
//     await client.close();
//   }
// }

