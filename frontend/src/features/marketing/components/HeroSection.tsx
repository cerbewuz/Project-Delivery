import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="bg-background pb-0 pt-20 sm:pt-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Ship projects, on time.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          Take care of the everyday workflows that shape how your team delivers,
          collaborates — and grows.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Book a demo
          </Link>
          <Link
            to="/signup"
            className="w-full rounded-full border border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 sm:w-auto"
          >
            Try for free
          </Link>
        </div>

        {/* Small announcement */}
        <p className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>✦</span>
          <span>New · Smarter milestone tracking</span>
        </p>
      </div>

      {/* Product mockup */}
      <div className="relative mx-auto mt-16 max-w-5xl px-6">
        <div className="overflow-hidden rounded-t-2xl border border-b-0 border-border bg-primary/10 p-3 shadow-2xl sm:p-4">
          {/* Browser chrome */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-error/60" />
                <span className="h-3 w-3 rounded-full bg-warning/60" />
                <span className="h-3 w-3 rounded-full bg-success/60" />
              </div>
              <div className="flex-1">
                <div className="mx-auto w-48 rounded-md bg-background px-3 py-1 text-center text-[10px] text-muted-foreground">
                  app.projectdelivery.io
                </div>
              </div>
            </div>

            {/* App UI mockup */}
            <div className="flex min-h-[320px] sm:min-h-[400px]">
              {/* Sidebar */}
              <div className="hidden w-48 flex-shrink-0 border-r border-border bg-muted/30 p-3 sm:block">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-[10px] font-black text-primary-foreground">
                    PD
                  </span>
                  <span className="text-xs font-semibold text-card-foreground">
                    Project Delivery
                  </span>
                </div>
                <nav className="space-y-1">
                  {["Home", "Projects", "Milestones", "Team", "Reports"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`rounded-lg px-2.5 py-1.5 text-[11px] font-medium ${
                          i === 1
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item}
                      </div>
                    ),
                  )}
                </nav>
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-card-foreground">
                    Projects
                  </h3>
                  <div className="flex gap-2">
                    {["Board", "List", "Timeline"].map((v, i) => (
                      <span
                        key={v}
                        className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                          i === 0
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Kanban columns */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      title: "To Do",
                      color: "bg-muted-foreground",
                      cards: ["Homepage redesign", "API integration"],
                    },
                    {
                      title: "In Progress",
                      color: "bg-info",
                      cards: ["Dashboard UI", "Auth flow"],
                    },
                    {
                      title: "Review",
                      color: "bg-warning",
                      cards: ["Brand guidelines"],
                    },
                    {
                      title: "Done",
                      color: "bg-success",
                      cards: ["Logo design", "Wireframes", "User research"],
                    },
                  ].map((col) => (
                    <div key={col.title}>
                      <div className="mb-2 flex items-center gap-1.5">
                        <span className={`h-2 w-2 rounded-full ${col.color}`} />
                        <span className="text-[10px] font-semibold text-card-foreground">
                          {col.title}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {col.cards.length}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {col.cards.map((card) => (
                          <div
                            key={card}
                            className="rounded-lg border border-border bg-background p-2.5 shadow-sm"
                          >
                            <p className="text-[10px] font-medium text-card-foreground">
                              {card}
                            </p>
                            <div className="mt-1.5 flex items-center gap-1">
                              <span className="h-4 w-4 rounded-full bg-primary/20" />
                              <span className="h-1 flex-1 rounded-full bg-muted" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
