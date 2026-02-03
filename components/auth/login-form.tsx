"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/firebase/auth";
import { Loader2 } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // T011: Implement form submission that calls signIn
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const result = await signIn(email, password);

    if (result.error) {
      // T026 & T027: Display error state with accessible aria-describedby
      setError(result.error);
      setIsLoading(false);
    } else {
      // T012: Redirect to returnUrl after successful sign-in
      router.push(returnUrl);
    }
  }

  // T028: Handle retry after error
  function handleRetry() {
    setError(null);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          aria-describedby={error ? "login-error" : undefined}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                     min-h-[44px]"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-foreground"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          aria-describedby={error ? "login-error" : undefined}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                     min-h-[44px]"
          placeholder="Enter your password"
        />
      </div>

      {/* T027: Inline error message with accessible aria-describedby linking */}
      {error && (
        <div
          id="login-error"
          role="alert"
          className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm"
        >
          <p>{error}</p>
          {error.includes("Network") && (
            <button
              type="button"
              onClick={handleRetry}
              className="mt-2 text-sm underline hover:no-underline"
            >
              Try again
            </button>
          )}
        </div>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full min-h-[44px] bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
}
