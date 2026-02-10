const STEPS = [
  {
    number: "01",
    title: "Create your project",
    description:
      "Set up milestones, assign team members, and define deliverables in minutes.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Track progress",
    description:
      "Real-time dashboards, automated status updates, and milestone tracking keep everyone aligned.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Deliver with confidence",
    description:
      "Client approvals, automated notifications, and analytics ensure nothing slips through the cracks.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
          How it works
        </p>
        <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Three steps to on-time delivery
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
          From project kickoff to client sign-off, our workflow keeps everything
          organized and transparent.
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line (hidden on last item and on mobile) */}
              {i < STEPS.length - 1 && (
                <div className="absolute left-1/2 top-7 hidden h-px w-full bg-border sm:block" />
              )}
              <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background text-primary">
                {step.icon}
              </div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Step {step.number}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
