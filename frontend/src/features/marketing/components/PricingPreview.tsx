import { Link } from "react-router-dom";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals and small side projects.",
    features: [
      "Up to 3 projects",
      "Basic milestone tracking",
      "1 team member",
      "Community support",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams and agencies.",
    features: [
      "Unlimited projects",
      "Advanced milestones & dependencies",
      "Up to 25 team members",
      "Client approval portal",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "SSO & SAML",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
] as const;

export function PricingPreview() {
  return (
    <section className="border-t border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Pricing
        </p>
        <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
          Start free, scale as you grow. No hidden fees.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-colors ${
                plan.highlighted
                  ? "border-primary"
                  : "border-border hover:border-primary/40"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-foreground">
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
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
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={plan.name === "Enterprise" ? "/contact" : "/signup"}
                className={`mt-8 block rounded-full px-4 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          <Link
            to="/pricing"
            className="font-medium text-primary hover:underline"
          >
            See full pricing details →
          </Link>
        </p>
      </div>
    </section>
  );
}
