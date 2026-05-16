"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdRefresh } from "react-icons/md";
import { adminAuthService } from "@/src/services/admin.auth.service";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const response = await adminAuthService.login({ email, password });

      if (!response.success) {
        setError(response.message || "Invalid credentials");
        return;
      }

      router.push("/dashboard");
    } catch (err: any) {
      console.error("Login failed:", err);
      setError(err.response?.data?.message || "An unexpected error occurred");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-6">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#F5C518 1px, transparent 1px), linear-gradient(90deg, #F5C518 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-sm">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="mb-8 flex items-center justify-center gap-2 sm:justify-start">
            <div className="bg-primary h-2 w-2 rounded-full shadow-[0_0_10px_rgba(245,197,24,0.5)]" />
            <span className="text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase">
              Admin Console
            </span>
          </div>
          <h1 className="font-heading text-foreground text-2xl font-bold tracking-tight">
            ott-adda
          </h1>
          <p className="text-muted-foreground mt-1 text-xs">
            Restricted access. Authorized personnel only.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-muted-foreground mb-1.5 block text-[11px] font-bold tracking-[0.15em] uppercase">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={sending}
              placeholder="admin@ott-adda.com"
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary h-12 w-full rounded-lg border px-4 text-sm transition-all focus:ring-1 focus:outline-none disabled:opacity-50"
            />
          </div>

          <div>
            <label className="text-muted-foreground mb-1.5 block text-[11px] font-bold tracking-[0.15em] uppercase">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={sending}
              placeholder="••••••••••••"
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary h-12 w-full rounded-lg border px-4 text-sm transition-all focus:ring-1 focus:outline-none disabled:opacity-50"
            />
          </div>

          {error && (
            <div className="bg-destructive/10 border-destructive/20 flex items-center gap-3 rounded-lg border p-3">
              <div className="bg-destructive h-1.5 w-1.5 shrink-0 rounded-full" />
              <p className="text-destructive text-sm font-medium">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={sending}
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(245,197,24,0.1)] transition-all disabled:cursor-not-allowed disabled:opacity-40"
          >
            {sending ? (
              <MdRefresh className="animate-spin text-lg" />
            ) : (
              "Authenticate"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="border-border text-muted-foreground mt-12 flex items-center justify-between border-t pt-6">
          <span className="text-[11px] font-medium tracking-wider">
            © 2026 ott-adda
          </span>
          <div className="flex gap-4">
            <a className="hover:text-foreground cursor-pointer text-[11px] font-medium transition-colors">
              Privacy
            </a>
            <a className="hover:text-foreground cursor-pointer text-[11px] font-medium transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
