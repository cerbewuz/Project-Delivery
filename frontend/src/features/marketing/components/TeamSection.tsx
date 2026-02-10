interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

const TEAM: TeamMember[] = [
  { name: "Alex Morgan", role: "CEO & Co-Founder", initials: "AM" },
  { name: "Jamie Park", role: "CTO & Co-Founder", initials: "JP" },
  { name: "Taylor Reed", role: "Head of Product", initials: "TR" },
  { name: "Jordan Ellis", role: "Head of Design", initials: "JE" },
  { name: "Sam Nguyen", role: "Lead Engineer", initials: "SN" },
  { name: "Casey Bloom", role: "Head of Customer Success", initials: "CB" },
];

export function TeamSection() {
  return (
    <section className="border-t border-border bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our team
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Meet the people behind the platform
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            A passionate team of builders, designers, and project management
            enthusiasts.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary text-sm font-bold text-primary">
                {member.initials}
              </div>
              <div>
                <p className="font-semibold text-foreground">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
