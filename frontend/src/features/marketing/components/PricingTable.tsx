import { Link } from "react-router-dom";
import { useState } from "react";

interface Plan {
  name: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "For individuals and small side projects.",
    features: [
      "Up to 3 projects",
      "Basic milestone tracking",
      "1 team member",
      "500 MB storage",
      "Community support",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    yearlyPrice: 24,
    description: "For growing teams and agencies.",
    features: [
      "Unlimited projects",
      "Advanced milestones & dependencies",
      "Up to 25 team members",
      "Client approval portal",
      "50 GB storage",
      "Slack & Teams integration",
      "Priority email support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    description: "For large organizations with custom needs.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Unlimited storage",
      "SSO & SAML authentication",
      "Dedicated account manager",
      "Custom integrations & API",
      "SLA guarantee",
      "On-premise deployment option",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export function PricingTable() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="bg-background pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Toggle */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative h-7 w-12 rounded-full transition-colors ${
              yearly ? "bg-primary" : "bg-border"
            }`}
            aria-label="Toggle yearly pricing"
          >
            <span
              className={`absolute top-0.5 h-6 w-6 rounded-full bg-card shadow-sm transition-transform ${
                yearly ? "translate-x-5.5" : "translate-x-0.5"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}
          >
            Yearly
          </span>
          {yearly && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              Save 17%
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
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
                  {price !== null ? (
                    <>
                      <span className="text-4xl font-extrabold tracking-tight text-foreground">
                        ${price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        /month
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      Custom
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
