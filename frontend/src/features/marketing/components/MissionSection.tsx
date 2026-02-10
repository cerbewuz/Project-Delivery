export function MissionSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our mission
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Making project delivery effortless
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We believe every team deserves tools that make collaboration
            seamless, deadlines manageable, and clients delighted. Project
            Delivery was born from the frustration of juggling spreadsheets,
            emails, and disconnected tools — and the conviction that there's a
            better way.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { stat: "10,000+", label: "Projects delivered" },
            { stat: "2,500+", label: "Teams worldwide" },
            { stat: "99.9%", label: "Uptime SLA" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border p-6 text-center transition-colors hover:border-primary/40"
            >
              <p className="text-3xl font-extrabold text-primary">
                {item.stat}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
