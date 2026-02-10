import { Link, Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex min-h-svh bg-background text-foreground">
      {/* Left panel — branding & marketing */}
      <div className="hidden w-1/2 flex-col justify-between bg-primary p-12 lg:flex">
        <div>
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-primary-foreground"
          >
            {/* <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/20 text-sm font-black text-primary-foreground">
              PD
            </span> */}
            Project Delivery
          </Link>

          {/* Badge */}
          {/* <div className="mt-16 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-3 py-1 text-xs font-medium text-primary-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/80" />
            Now available
          </div> */}

          {/* Headline */}
          <h2 className="mt-20 max-w-md text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground">
            Stay on top of every milestone. Ship with confidence.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Manage deliverables, track progress, and keep every stakeholder
            aligned — from kickoff to launch.
          </p>
        </div>

        {/* Decorative mockup card */}
        <div className="relative mt-8">
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/10 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary-foreground/20" />
              <div>
                <div className="h-3 w-24 rounded bg-primary-foreground/20" />
                <div className="mt-1.5 h-2 w-16 rounded bg-primary-foreground/10" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-foreground/40" />
                <div className="h-2.5 flex-1 rounded bg-primary-foreground/15" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-foreground/40" />
                <div className="h-2.5 w-3/4 rounded bg-primary-foreground/15" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-foreground/40" />
                <div className="h-2.5 w-1/2 rounded bg-primary-foreground/15" />
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <div className="h-7 w-20 rounded-lg bg-primary-foreground/20" />
              <div className="h-7 w-20 rounded-lg bg-primary-foreground/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — auth form */}
      <div className="flex flex-1 flex-col">
        {/* Mobile-only header */}
        <div className="flex items-center justify-between p-6 lg:hidden">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground"
          >
            {/* <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-black text-primary-foreground">
              PD
            </span> */}
            Project Delivery
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center p-6">
          <div className="w-full max-w-sm">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
