"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdRefresh } from "react-icons/md";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setError("");
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: "include"
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.error || "Invalid credentials");
                return;
            }

            router.push("/dashboard");
        } catch (err) {
            console.error("Login failed:", err);
            setError("An unexpected error occurred");
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#F5C518 1px, transparent 1px), linear-gradient(90deg, #F5C518 1px, transparent 1px)`,
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="w-full max-w-sm relative z-10">
                {/* Header */}
                <div className="mb-10 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-8">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(245,197,24,0.5)]" />
                        <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase font-bold">
                            Admin Console
                        </span>
                    </div>
                    <h1 className="text-2xl font-heading font-bold text-foreground tracking-tight">
                        HAANNAA
                    </h1>
                    <p className="text-muted-foreground text-xs mt-1">
                        Restricted access. Authorized personnel only.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-[11px] font-bold tracking-[0.15em] text-muted-foreground uppercase mb-1.5">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={sending}
                            placeholder="admin@haannaa.com"
                            className="w-full bg-muted border border-border rounded-lg h-12 px-4 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label className="block text-[11px] font-bold tracking-[0.15em] text-muted-foreground uppercase mb-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={sending}
                            placeholder="••••••••••••"
                            className="w-full bg-muted border border-border rounded-lg h-12 px-4 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50"
                        />
                    </div>

                    {error && (
                        <div className="flex items-center gap-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                            <div className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                            <p className="text-destructive text-sm font-medium">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={sending}
                        className="w-full h-12 mt-4 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase rounded-lg hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(245,197,24,0.1)]"
                    >
                        {sending ? (
                            <MdRefresh className="animate-spin text-lg" />
                        ) : (
                            "Authenticate"
                        )}
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-12 pt-6 border-t border-border flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px] font-medium tracking-wider">
                        © 2026 HAANNAA
                    </span>
                    <div className="flex gap-4">
                        <a className="text-[11px] font-medium hover:text-foreground transition-colors cursor-pointer">
                            Privacy
                        </a>
                        <a className="text-[11px] font-medium hover:text-foreground transition-colors cursor-pointer">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}