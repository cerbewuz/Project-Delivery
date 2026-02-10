export function PrivacyPage() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: February 10, 2026
        </p>

        <div className="prose-sm mt-10 space-y-6 text-muted-foreground [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:text-foreground [&>p]:leading-relaxed">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name,
            email address, and company name when you create an account. We also
            collect usage data, including pages visited, features used, and
            interaction patterns.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use collected information to provide and improve the Service,
            communicate with you, and ensure the security of your account. We do
            not sell your personal data to third parties.
          </p>

          <h2>3. Data Storage & Security</h2>
          <p>
            Your data is stored on secure servers with industry-standard
            encryption. We implement appropriate technical and organizational
            measures to protect against unauthorized access or data loss.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party services for analytics, payment processing,
            and communication. These providers are contractually obligated to
            handle your data in accordance with this policy.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data
            at any time. You may also request a copy of your data or opt out of
            marketing communications.
          </p>

          <h2>6. Contact</h2>
          <p>
            For privacy-related inquiries, contact us at{" "}
            <a
              href="mailto:privacy@projectdelivery.io"
              className="font-medium text-primary hover:underline"
            >
              privacy@projectdelivery.io
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
