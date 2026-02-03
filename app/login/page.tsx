"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";
import { useAuth } from "@/components/auth/auth-provider";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

function LoginContent() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";

  // Redirect if already authenticated
  useEffect(() => {
    if (!loading && user) {
      router.push(returnUrl);
    }
  }, [user, loading, router, returnUrl]);

  // Show loading while checking auth state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // Don't render form if already authenticated (will redirect)
  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      {/* Logo and branding */}
      <Link href="/" className="mb-8 flex items-center gap-2">
        <Image
          src="/images/treelogo2.webp"
          alt="BeechTree Logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <span className="text-2xl font-semibold text-foreground">BeechTree</span>
      </Link>

      {/* Login card - T031: Responsive down to 320px */}
      <Card className="w-full max-w-md border-border/50 shadow-lg">
        <CardContent className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
            <p className="text-muted-foreground mt-2">
              Sign in with your Kansha account
            </p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
          </Suspense>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <span className="text-foreground">
              Register through the Kansha app
            </span>
          </p>
        </CardContent>
      </Card>

      {/* Footer link */}
      <Link
        href="/"
        className="mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        &larr; Back to BeechTree
      </Link>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
