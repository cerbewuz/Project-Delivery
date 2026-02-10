export function TermsPage() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: February 10, 2026
        </p>

        <div className="prose-sm mt-10 space-y-6 text-muted-foreground [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:text-foreground [&>p]:leading-relaxed">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Project Delivery platform ("Service"), you
            agree to be bound by these Terms of Service. If you do not agree,
            please do not use the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Project Delivery provides a project management and deliverable
            tracking platform. We reserve the right to modify, suspend, or
            discontinue any part of the Service at any time.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials. You must notify us immediately of any
            unauthorized access.
          </p>

          <h2>4. Acceptable Use</h2>
          <p>
            You agree not to misuse the Service, including but not limited to:
            attempting to gain unauthorized access, transmitting malicious code,
            or using the Service for unlawful purposes.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality
            are owned by Project Delivery and are protected by international
            copyright, trademark, and other intellectual property laws.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall Project Delivery be liable for any indirect,
            incidental, special, or consequential damages arising from your use
            of the Service.
          </p>

          <h2>7. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a
              href="mailto:legal@projectdelivery.io"
              className="font-medium text-primary hover:underline"
            >
              legal@projectdelivery.io
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
