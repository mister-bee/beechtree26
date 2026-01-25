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
    logo: "/images/treelogo2.webp",
  },
  {
    id: "marketing",
    name: "Marketing",
    href: "/marketing",
    icon: Megaphone,
    description: "AI marketing solutions",
    logo: "/images/tree-logo-darkblue.webp",
  },
  {
    id: "property",
    name: "Property Management",
    href: "/property",
    icon: Building2,
    description: "Smart property solutions",
    logo: "/images/tree-logo-yellow.webp",
  },
];

export function BusinessDropdown({ currentBusiness }: BusinessDropdownProps) {
  const current = businesses.find((b) => b.id === currentBusiness) || businesses[0];

  return (
    <DropdownMenu.Root>
      {/* Preload all logos to prevent flicker when switching */}
      <div className="hidden">
        {businesses.map((business) => (
          <Image
            key={business.id}
            src={business.logo}
            alt=""
            width={32}
            height={32}
            priority
          />
        ))}
      </div>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-2 outline-none focus:ring-2 focus:ring-gray-300 rounded-lg px-2 py-1 -ml-2 hover:bg-gray-100 transition-colors">
          <Image
            src={current.logo}
            alt="BeechTree Logo"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
          <span className="text-xl font-semibold text-foreground">BeechTree</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[240px] bg-white border border-gray-200 rounded-xl shadow-lg p-2 z-50 animate-in fade-in-0 zoom-in-95"
          sideOffset={8}
          align="start"
        >
          <div className="px-3 py-2 mb-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                      ? "bg-gray-100 text-gray-900"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-gray-200" : "bg-gray-100"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-gray-900" : "text-gray-500"}`} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${isActive ? "text-gray-900" : "text-gray-700"}`}>
                      {business.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {business.description}
                    </p>
                  </div>
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-gray-900" />
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
