interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Engineering Lead at Acme Studio",
    quote:
      "Project Delivery cut our sprint overhead in half. The milestone tracking alone has saved us dozens of hours each month.",
    initials: "SC",
  },
  {
    id: "2",
    name: "Marcus Rivera",
    role: "Director of Operations, BrightPath Agency",
    quote:
      "Our clients love the approval portal. They can see exactly where their project stands and sign off on deliverables in seconds.",
    initials: "MR",
  },
  {
    id: "3",
    name: "Priya Patel",
    role: "Freelance PM & Consultant",
    quote:
      "I manage 8 client projects simultaneously and haven't missed a deadline since switching to Project Delivery. It's that good.",
    initials: "PP",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Testimonials
        </p>
        <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Loved by teams everywhere
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5 text-warning">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
