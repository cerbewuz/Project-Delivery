const FEATURE_DETAILS = [
  {
    title: "Project Management",
    description:
      "Organize every project with customizable boards, kanban views, and timeline charts. Create task hierarchies, set dependencies, and assign team members — all from one unified workspace.",
    highlights: [
      "Kanban boards with drag-and-drop",
      "Gantt chart timeline view",
      "Task dependencies & critical path",
      "Custom fields & labels",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        />
      </svg>
    ),
  },
  {
    title: "Milestone Tracking",
    description:
      "Break complex projects into clear milestones with progress tracking, due dates, and automated status updates. Visualize progress with burn-down charts and completion percentages.",
    highlights: [
      "Visual progress bars per milestone",
      "Automatic status transitions",
      "Due date alerts & reminders",
      "Milestone dependency mapping",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
        />
      </svg>
    ),
  },
  {
    title: "Client Approvals",
    description:
      "Share deliverables through branded client portals. Clients can review, comment, approve, or request revisions — creating a clear audit trail for every decision.",
    highlights: [
      "Branded client portals",
      "One-click approve / request revision",
      "Threaded comments on deliverables",
      "Full approval audit trail",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Automated Updates",
    description:
      "Keep everyone in sync without the manual overhead. Automated emails, in-app notifications, and Slack/Teams integrations ensure no one misses a beat.",
    highlights: [
      "Email digest summaries",
      "Real-time in-app notifications",
      "Slack & Microsoft Teams integration",
      "Custom notification rules",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
    ),
  },
  {
    title: "File Management",
    description:
      "Upload, organize, and version-control all project files in one place. From design mockups to signed contracts, every document is easily accessible and always up to date.",
    highlights: [
      "Drag-and-drop file uploads",
      "Automatic version history",
      "File preview (images, PDFs, docs)",
      "Storage organized by project",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "Reporting & Analytics",
    description:
      "Make data-driven decisions with real-time dashboards, project health scores, team velocity metrics, and exportable reports for stakeholder presentations.",
    highlights: [
      "Real-time project health dashboard",
      "Team velocity & workload charts",
      "Burn-down & burn-up reports",
      "Export to PDF / CSV",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
        />
      </svg>
    ),
  },
];

export function FeatureDetailSection() {
  return (
    <section className="bg-background pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-16 sm:gap-20">
          {FEATURE_DETAILS.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon block — outlined circle */}
              <div className="flex flex-shrink-0 items-center justify-center md:w-2/5">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-primary text-primary">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mb-5 text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {feature.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
