"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { SITE } from "@/lib/constants";

const fieldClasses =
  "w-full rounded-sm border border-border bg-surface px-4 py-3 text-heading placeholder:text-body/60 focus:border-primary focus:outline-none";
const labelClasses = "mb-2 block text-sm font-semibold tracking-wide text-heading uppercase";
const errorClasses = "mt-1.5 text-sm text-red-600";

function buildMailtoHref(values: ContactFormValues) {
  const subject = `Website Inquiry from ${values.name}`;
  const body = `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (values: ContactFormValues) => {
    window.location.href = buildMailtoHref(values);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-lg border border-border bg-surface-muted px-8 py-16 text-center">
        <CheckCircle2 className="size-14 text-primary" aria-hidden="true" />
        <h2 className="mt-6 text-2xl font-bold text-heading">Your email app should now be open</h2>
        <p className="mt-3 max-w-md text-body">
          We&rsquo;ve pre-filled a message with your details — just hit send from your mail app. If it didn&rsquo;t
          open, email us directly at{" "}
          <a href={`mailto:${SITE.email}`} className="text-primary hover:text-primary-hover">
            {SITE.email}
          </a>{" "}
          or call {SITE.phone}.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-semibold tracking-wide text-primary uppercase hover:text-primary-hover"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={fieldClasses}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className={errorClasses} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={fieldClasses}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className={errorClasses} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          className={fieldClasses}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className={errorClasses} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        Send
      </button>
    </form>
  );
}
