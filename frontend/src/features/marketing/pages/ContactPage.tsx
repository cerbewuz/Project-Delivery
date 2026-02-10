import { ContactForm } from "../components/ContactForm";
import { ContactInfo } from "../components/ContactInfo";

export function ContactPage() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact us
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
