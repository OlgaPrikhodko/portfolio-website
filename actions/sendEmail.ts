"use server";
import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
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

  let data;

  try {
    data = await resend.emails.send({
      from: "My Portfolio Contact Form <onboarding@resend.dev>",
      to: "helga.prikhodko@gmail.com",
      subject: "Message from my portfolio contact form",
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
    if (data.error) {
      throw new Error(data.error.message);
    }
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
