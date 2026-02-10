import { useState } from "react";
import { Link } from "react-router-dom";

const FAQS = [
  {
    q: "Can I try before I buy?",
    a: "Absolutely! Every paid plan comes with a 14-day free trial. No credit card required to start.",
  },
  {
    q: "How does billing work?",
    a: "We bill monthly or annually (save 17% with annual billing). You can upgrade, downgrade, or cancel at any time from your account settings.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for Enterprise plans.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data is retained for 30 days after cancellation. During that window you can reactivate your account and pick up where you left off.",
  },
  {
    q: "Do you offer discounts for non-profits?",
    a: "Yes! We offer 50% off for registered non-profit organizations. Contact our sales team for details.",
  },
];

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Can't find what you're looking for?{" "}
            <Link
              to="/contact"
              className="font-medium text-primary hover:underline"
            >
              Contact our team
            </Link>
            .
          </p>
        </div>

        <dl className="mt-12 divide-y divide-border">
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="py-5">
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-sm font-medium text-foreground">
                    {faq.q}
                  </span>
                  <svg
                    className={`ml-4 h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </dt>
              {openIndex === i && (
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
