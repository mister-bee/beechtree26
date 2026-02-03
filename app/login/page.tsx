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

  // Determine theme based on returnUrl
  const getThemeClass = () => {
    if (returnUrl.startsWith("/marketing")) return "theme-blue";
    if (returnUrl.startsWith("/property")) return "theme-yellow";
    return ""; // default green for software/main
  };

  // Get the correct logo based on theme
  const getLogoSrc = () => {
    if (returnUrl.startsWith("/marketing")) return "/images/tree-logo-blue.webp";
    if (returnUrl.startsWith("/property")) return "/images/tree-logo-yellow.webp";
    return "/images/treelogo2.webp"; // default green
  };

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
    <div className={`min-h-screen flex flex-col items-center justify-center bg-background px-4 ${getThemeClass()}`}>
      {/* Login card - T031: Responsive down to 320px */}
      <Card className="w-full max-w-md border-border/50 shadow-lg">
        <CardContent className="p-6 sm:p-8">
          {/* Logo inside the card */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Image
              src={getLogoSrc()}
              alt="BeechTree Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-2xl font-semibold text-foreground">BeechTree</span>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
          </Suspense>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Sign in with your credentials from Kansha, Layla, or any BeechTree application.
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
