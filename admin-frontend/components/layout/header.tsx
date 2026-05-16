"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminAuthService } from "@/src/services/admin.auth.service";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export default function Header({ user }: { user: User | null }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="border-border bg-background w-full border-b">
      <div className="flex h-16 w-full items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-primary h-2 w-2 rounded-full shadow-[0_0_10px_rgba(245,197,24,0.5)]" />
          <Link
            href="/"
            className="font-heading text-foreground text-lg font-bold tracking-widest uppercase"
          >
            ott-adda
          </Link>
          <span className="text-muted-foreground border-border rounded border px-2 py-0.5 text-[10px] font-medium tracking-[0.15em] uppercase">
            Admin
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 focus:outline-none"
              >
                <div className="hidden text-right sm:block">
                  <p className="text-foreground text-sm font-medium">
                    {user.name}
                  </p>
                  <p className="text-muted-foreground text-[10px] tracking-wider uppercase">
                    {user.role?.replace("_", " ")}
                  </p>
                </div>
                <div className="bg-primary/10 border-primary/20 text-primary flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <svg
                  className={`text-muted-foreground h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {open && (
                <div className="bg-card border-border absolute right-0 z-50 mt-3 w-56 overflow-hidden rounded-xl border shadow-2xl">
                  {/* User info */}
                  <div className="border-border bg-muted/30 border-b px-4 py-3">
                    <p className="text-foreground truncate text-sm font-medium">
                      {user.name}
                    </p>
                    <p className="text-muted-foreground mt-0.5 truncate text-[11px]">
                      {user.email}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="py-2">
                    <Link
                      href="/dashboard"
                      onClick={() => setOpen(false)}
                      className="text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-3 px-4 py-2 text-sm transition-colors"
                    >
                      <span>⌘</span> Dashboard
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      onClick={() => setOpen(false)}
                      className="text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-3 px-4 py-2 text-sm transition-colors"
                    >
                      <span>⚙</span> Settings
                    </Link>
                  </div>

                  {/* Logout */}
                  <div className="border-border border-t py-2">
                    <button
                      onClick={async () => {
                        setOpen(false);
                        try {
                          await adminAuthService.logout();
                        } catch (error) {
                          // Redirect anyway to end local authenticated UI state.
                        } finally {
                          router.replace("/login");
                        }
                      }}
                      className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-500 transition-colors hover:bg-red-500/10 hover:text-red-400"
                    >
                      <span>↩</span> Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="text-primary hover:text-primary/80 bg-primary/10 rounded-lg px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors"
            >
              Sign in →
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
