import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(120),
  email: z.email("Please enter a valid email address."),
  message: z.string().min(10, "Message should be at least 10 characters.").max(5000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
