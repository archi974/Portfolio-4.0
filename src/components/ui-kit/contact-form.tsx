import { useState, type FormEvent } from "react";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui-kit/button";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Veuillez renseigner votre nom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Veuillez saisir une adresse e-mail valide.";
    if (!subject) next.subject = "Veuillez renseigner le sujet de votre message.";
    if (message.length < 12) next.message = "Merci de décrire votre demande en quelques phrases.";

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
          Votre Nom
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Ex: Vincent K/BIDI"
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
          Votre E-mail
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="ex: vincent@gmail.com"
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
        <label
          htmlFor="contact-subject" className="mb-2 block font-display text-sm font-medium">
          Sujet
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="Ex. : Opportunité, projet, question..."
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          className={cn(fieldClass, errors.subject && "border-destructive")}
        />
        {errors.subject ? (
          <p id="contact-subject-error" className="mt-2 text-xs text-destructive">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block font-display text-sm font-medium">
          Votre message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Ex. : Bonjour Vincent, je souhaite discuter d'un projet, d'une opportunité ou vous poser une question..."
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
          Envoyer
        </Button>
        <p aria-live="polite" className="text-sm text-ink-soft">
          {sent ? (
            <span className="inline-flex items-center gap-2 text-ink">
              <Check className="size-4 text-accent" aria-hidden />
              Votre message a bien été envoyé. Je vous répondrai dans les meilleurs délais.
            </span>
          ) : null}
        </p>
      </div>
    </form>
  );
}
