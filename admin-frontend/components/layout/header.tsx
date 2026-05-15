"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import api from "@/lib/axios"

type User = {
  id: string
  name: string
  email: string
  role: string
}

export default function Header({ user }: { user: User | null }) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="flex h-16 w-full items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(245,197,24,0.5)]" />
          <Link href="/" className="font-heading text-lg font-bold tracking-widest text-foreground uppercase">
            Haannaa
          </Link>
          <span className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase border border-border px-2 py-0.5 rounded font-medium">
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
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-foreground">{user.name}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{user.role?.replace("_", " ")}</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-sm font-bold text-primary">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <svg
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-3 w-56 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50">
                  {/* User info */}
                  <div className="px-4 py-3 border-b border-border bg-muted/30">
                    <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
                    <p className="text-[11px] text-muted-foreground truncate mt-0.5">{user.email}</p>
                  </div>

                  {/* Links */}
                  <div className="py-2">
                    <Link
                      href="/dashboard"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <span>⌘</span> Dashboard
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <span>⚙</span> Settings
                    </Link>
                  </div>

                  {/* Logout */}
                  <div className="border-t border-border py-2">
                    <button
                      onClick={async () => {
                        setOpen(false)
                        try {
                          await api.post("/auth/logout")
                        } catch (error) {
                          // Redirect anyway to end local authenticated UI state.
                        } finally {
                          router.replace("/login")
                        }
                      }}
                      className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
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
              className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary hover:text-primary/80 transition-colors bg-primary/10 px-4 py-2 rounded-lg"
            >
              Sign in →
            </Link>
          )}
        </div>

      </div>
    </header>
  )
}