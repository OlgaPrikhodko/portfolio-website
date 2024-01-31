"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid sender message",
    };
  }
  try {
    await resend.emails.send({
      from: "My Portfolio Contact Form <onboarding@resend.dev>",
      to: "helga.prikhodko@gmail.com",
      subject: "Message from my portfolio contact form",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
