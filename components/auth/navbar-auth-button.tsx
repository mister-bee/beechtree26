"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/auth-provider";
import { UserMenu } from "@/components/auth/user-menu";

export function NavbarAuthButton() {
  const { user, loading } = useAuth();
  const pathname = usePathname();

  // Show nothing while checking auth state to prevent flash
  if (loading) {
    return (
      <div className="w-[70px] h-[36px] bg-muted/50 rounded-md animate-pulse" />
    );
  }

  // T019-T021: Show UserMenu when authenticated
  if (user) {
    return <UserMenu />;
  }

  // T013-T015: Show Login button when not authenticated
  return (
    <Link href={`/login?returnUrl=${encodeURIComponent(pathname)}`}>
      <Button
        size="sm"
        className="bg-primary text-primary-foreground hover:bg-primary/90 min-h-[36px] min-w-[70px]"
      >
        Login
      </Button>
    </Link>
  );
}
