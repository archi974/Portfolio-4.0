import { useState, type FormEvent } from "react";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui-kit/button";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "A valid email helps me reply.";
    if (message.length < 12) next.message = "A sentence or two is enough to get started.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSent(true);
    event.currentTarget.reset();
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink transition-colors duration-250 placeholder:text-ink-faint hover:border-ink-faint focus:border-accent focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-2 block font-display text-sm font-medium">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={cn(fieldClass, errors.name && "border-destructive")}
        />
        {errors.name ? (
          <p id="contact-name-error" className="mt-2 text-xs text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block font-display text-sm font-medium">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={cn(fieldClass, errors.email && "border-destructive")}
        />
        {errors.email ? (
          <p id="contact-email-error" className="mt-2 text-xs text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block font-display text-sm font-medium">
          Project
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="What are you working on, and where are you stuck?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(fieldClass, "resize-y", errors.message && "border-destructive")}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-2 text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg">
          <Send aria-hidden />
          Send message
        </Button>
        <p aria-live="polite" className="text-sm text-ink-soft">
          {sent ? (
            <span className="inline-flex items-center gap-2 text-ink">
              <Check className="size-4 text-accent" aria-hidden />
              Thanks — I usually reply within two working days.
            </span>
          ) : null}
        </p>
      </div>
    </form>
  );
}
