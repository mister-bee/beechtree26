"use client";

import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "@/components/auth/auth-provider";
import { signOut } from "@/lib/firebase/auth";

export function UserMenu() {
  const { user } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);

  if (!user) return null;

  // Get display name or email
  const displayName = user.displayName || user.email?.split("@")[0] || "User";
  const email = user.email || "";

  // T022 & T023: Sign out handler
  async function handleSignOut() {
    setIsSigningOut(true);
    await signOut();
    // T024: AuthProvider state updates automatically via onAuthStateChanged
    setIsSigningOut(false);
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-2 outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1.5
                     hover:bg-accent transition-colors min-h-[44px] min-w-[44px]"
          aria-label="User menu"
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <span className="hidden sm:inline text-sm font-medium text-foreground max-w-[120px] truncate">
            {displayName}
          </span>
          <ChevronDown className="w-4 h-4 text-muted-foreground hidden sm:inline" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[200px] bg-card border border-border rounded-xl shadow-lg p-2 z-50
                     animate-in fade-in-0 zoom-in-95"
          sideOffset={8}
          align="end"
        >
          {/* User info */}
          <div className="px-3 py-2 border-b border-border mb-2">
            <p className="text-sm font-medium text-foreground truncate">
              {displayName}
            </p>
            <p className="text-xs text-muted-foreground truncate">{email}</p>
          </div>

          {/* Sign Out button */}
          <DropdownMenu.Item asChild>
            <button
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg outline-none cursor-pointer
                         text-sm text-foreground hover:bg-accent focus:bg-accent transition-colors
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LogOut className="w-4 h-4 text-muted-foreground" />
              {isSigningOut ? "Signing out..." : "Sign Out"}
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
