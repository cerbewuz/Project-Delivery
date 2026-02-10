const AUDIENCES = [
  {
    title: "Agencies",
    description:
      "Manage multiple client projects simultaneously with dedicated workspaces, branded portals, and automated reporting.",
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
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z"
        />
      </svg>
    ),
  },
  {
    title: "Clients",
    description:
      "Stay informed with real-time project updates, approve deliverables, and communicate with your team — all in one portal.",
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
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    title: "Project Managers",
    description:
      "Get a bird's-eye view of every project, track team velocity, manage risks, and hit every deadline consistently.",
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
    ),
  },
] as const;

export function AudienceSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Built for everyone
        </p>
        <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Who it's for
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
          Whether you're an agency, a client, or a project manager — we've got
          you covered.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.title}
              className="rounded-2xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/40"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary text-primary">
                {audience.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                {audience.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
