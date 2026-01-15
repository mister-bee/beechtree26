"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, GraduationCap, Megaphone, Building2 } from "lucide-react";

interface BusinessDropdownProps {
  currentBusiness: "education" | "marketing" | "property";
}

const businesses = [
  {
    id: "education",
    name: "Education",
    href: "/",
    icon: GraduationCap,
    description: "AI for K-12 classrooms",
  },
  {
    id: "marketing",
    name: "Marketing",
    href: "/marketing",
    icon: Megaphone,
    description: "AI marketing solutions",
  },
  {
    id: "property",
    name: "Property Management",
    href: "/property",
    icon: Building2,
    description: "Smart property solutions",
  },
];

export function BusinessDropdown({ currentBusiness }: BusinessDropdownProps) {
  const current = businesses.find((b) => b.id === currentBusiness) || businesses[0];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-2 outline-none focus:ring-2 focus:ring-primary/50 rounded-lg px-2 py-1 -ml-2 hover:bg-accent/50 transition-colors">
          <Image
            src="/images/treelogo2.webp"
            alt="BeechTree Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold text-foreground">BeechTree</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[240px] bg-card border border-border rounded-xl shadow-lg p-2 z-50 animate-in fade-in-0 zoom-in-95"
          sideOffset={8}
          align="start"
        >
          <div className="px-3 py-2 mb-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Business Areas
            </p>
          </div>

          {businesses.map((business) => {
            const Icon = business.icon;
            const isActive = business.id === currentBusiness;

            return (
              <DropdownMenu.Item key={business.id} asChild>
                <Link
                  href={business.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg outline-none cursor-pointer transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent text-foreground"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-primary/20" : "bg-accent"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${isActive ? "text-primary" : ""}`}>
                      {business.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {business.description}
                    </p>
                  </div>
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </Link>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
