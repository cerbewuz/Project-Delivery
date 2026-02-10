import { useState } from "react";
import { Link } from "react-router-dom";

export function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  /* ── Success state ── */
  if (submitted) {
    return (
      <>
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border">
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.981l7.5-4.039a2.25 2.25 0 012.134 0l7.5 4.039a2.25 2.25 0 011.183 1.98V19.5z"
            />
          </svg>
        </div>

        <h1 className="mb-2 text-center text-xl font-extrabold tracking-tight text-foreground">
          Check your email
        </h1>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          We sent a password reset link to your email address. Click the link to
          create a new password.
        </p>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="w-full rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Resend email
          </button>
          <Link
            to="/login"
            className="block w-full rounded-xl border border-border px-5 py-2.5 text-center text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Back to log in
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Didn't receive the email? Check your spam folder or{" "}
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="font-medium text-primary hover:underline"
          >
            try another email
          </button>
          .
        </p>
      </>
    );
  }

  /* ── Form state ── */
  return (
    <>
      {/* Icon */}
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border">
        <svg
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </div>

      <h1 className="mb-2 text-center text-xl font-extrabold tracking-tight text-foreground">
        Forgot your password?
      </h1>
      <p className="mb-8 text-center text-sm text-muted-foreground">
        No worries — enter the email address associated with your account and
        we'll send you a link to reset your password.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-4"
      >
        {/* Email */}
        <div>
          <label
            htmlFor="forgot-email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Business email
          </label>
          <input
            id="forgot-email"
            type="email"
            required
            autoFocus
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            placeholder="you@company.com"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <Link
            to="/login"
            className="rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Back
          </Link>
          <button
            type="submit"
            className="flex-1 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Reset password
          </button>
        </div>
      </form>

      {/* Footer link */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Remember your password?{" "}
        <Link
          to="/login"
          className="font-medium text-foreground underline hover:text-primary"
        >
          Log in
        </Link>
      </p>
    </>
  );
}
