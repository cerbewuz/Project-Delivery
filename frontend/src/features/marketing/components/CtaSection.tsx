import { Link } from "react-router-dom";

export function CtaSection() {
  return (
    <section className="bg-primary py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
          Ready to deliver projects on time?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80">
          Join thousands of teams already using Project Delivery to streamline
          their workflow and keep clients happy.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/signup"
            className="w-full rounded-full bg-card px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-card/90 sm:w-auto"
          >
            Start free trial
          </Link>
          <Link
            to="/contact"
            className="w-full rounded-full border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
