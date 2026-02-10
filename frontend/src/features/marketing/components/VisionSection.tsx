export function VisionSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Product vision
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          The future of project collaboration
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          We're building toward a world where project delivery is proactive, not
          reactive. Our roadmap includes AI-powered risk detection, predictive
          scheduling, and intelligent resource allocation — so teams can focus
          on the work that matters, while the platform handles the overhead.
        </p>
        <div className="mx-auto mt-10 grid max-w-2xl gap-5 sm:grid-cols-2">
          {[
            {
              title: "AI Risk Detection",
              desc: "Identify at-risk milestones before they become blockers.",
            },
            {
              title: "Predictive Scheduling",
              desc: "Automatically adjust timelines based on team velocity.",
            },
            {
              title: "Smart Resource Allocation",
              desc: "Optimize team capacity across projects in real time.",
            },
            {
              title: "Universal Integrations",
              desc: "Connect every tool your team already uses — seamlessly.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-primary/40"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
