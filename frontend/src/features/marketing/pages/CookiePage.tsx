export function CookiePage() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Cookie Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: February 10, 2026
        </p>

        <div className="prose-sm mt-10 space-y-6 text-muted-foreground [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:text-foreground [&>p]:leading-relaxed">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help us remember your preferences and improve your
            experience.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use essential cookies to maintain your session and preferences
            (such as your theme setting). We also use analytics cookies to
            understand how you interact with our platform.
          </p>

          <h2>3. Types of Cookies</h2>
          <p>
            <strong className="text-foreground">Essential cookies:</strong>{" "}
            Required for the Service to function (e.g., authentication, theme
            preference).
          </p>
          <p>
            <strong className="text-foreground">Analytics cookies:</strong> Help
            us understand usage patterns to improve the product.
          </p>
          <p>
            <strong className="text-foreground">Marketing cookies:</strong> Used
            to deliver relevant content. You can opt out at any time.
          </p>

          <h2>4. Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings. Disabling
            essential cookies may affect the functionality of the Service.
          </p>

          <h2>5. Contact</h2>
          <p>
            Questions about our cookie practices? Email{" "}
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
