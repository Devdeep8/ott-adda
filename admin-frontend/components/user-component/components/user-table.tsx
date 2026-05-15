/* eslint-disable @next/next/no-img-element */
// components/dashboard/users/users-table.tsx
"use client"

import { useEffect, useState, useCallback } from "react"
import { MdRefresh, MdSearch, MdEdit, MdClose, MdCheck, MdAutoAwesome } from "react-icons/md"
import api from "@/lib/axios"
import { LunaPersonalityModal } from "./luna-personality-modal"
import Link from "next/link"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string | null
  email: string | null
  image: string | null
  customId: string | null
  isOnboarded: boolean
  currentLocation: string | null
  lastActiveAt: string | null
  createdAt: string
}

type Pagination = {
  total: number
  page: number
  limit: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

type EditForm = {
  name: string
  email: string
  currentLocation: string
}

// ── Tooltip wrapper ──────────────────────────────────────────────────────────
function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <div className="relative group/tip inline-flex">
      {children}
      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50
        opacity-0 group-hover/tip:opacity-100 transition-opacity duration-150 whitespace-nowrap">
        <div className="bg-zinc-900 border border-border text-[10px] font-bold tracking-widest uppercase
          text-muted-foreground px-2.5 py-1.5 rounded-lg shadow-xl">
          {text}
        </div>
        {/* Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0
          border-l-4 border-r-4 border-t-4
          border-l-transparent border-r-transparent border-t-border" />
      </div>
    </div>
  )
}

// ── Edit Modal ────────────────────────────────────────────────────────────────
function EditModal({
  user,
  onClose,
  onSave,
}: {
  user: User
  onClose: () => void
  onSave: (id: string, data: EditForm) => Promise<void>
}) {
  const [form, setForm] = useState<EditForm>({
    name: user.name ?? "",
    email: user.email ?? "",
    currentLocation: user.currentLocation ?? "",
  })
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    await onSave(user.id, form)
    setSaving(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-card border border-border rounded-xl shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div>
            <h2 className="text-[11px] font-bold text-foreground tracking-widest uppercase">Edit User</h2>
            <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{user.id}</p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <MdClose className="text-lg" />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-5 space-y-4">
          {[
            { label: "Name", key: "name", type: "text", placeholder: "Full name" },
            { label: "Email", key: "email", type: "email", placeholder: "email@example.com" },
            { label: "Location", key: "currentLocation", type: "text", placeholder: "City, Country" },
          ].map(({ label, key, type, placeholder }) => (
            <div key={key}>
              <label className="block text-[11px] font-bold tracking-widest uppercase text-muted-foreground mb-1.5">
                {label}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                value={form[key as keyof EditForm]}
                onChange={(e) => setForm(prev => ({ ...prev, [key]: e.target.value }))}
                className="w-full bg-muted border border-border rounded-lg h-10 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border bg-muted/30">
          <button
            onClick={onClose}
            className="h-9 px-4 text-[11px] font-bold tracking-widest uppercase text-muted-foreground border border-border rounded-lg hover:bg-muted hover:text-foreground transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="h-9 px-4 text-[11px] font-bold tracking-widest uppercase bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 shadow-[0_0_10px_rgba(245,197,24,0.15)]"
          >
            {saving ? (
              <MdRefresh className="animate-spin text-sm" />
            ) : (
              <MdCheck className="text-sm" />
            )}
            Save
          </button>
        </div>

      </div>
    </div>
  )
}

// ── Main Table ────────────────────────────────────────────────────────────────
export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([])
  const [pagination, setPagination] = useState<Pagination | null>(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [isOnboarded, setIsOnboarded] = useState("")
  const [sortBy, setSortBy] = useState("createdAt")
  const [sortOrder, setSortOrder] = useState("desc")
  const [page, setPage] = useState(1)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [editingLunaUser, setEditingLunaUser] = useState<User | null>(null)

  const router = useRouter()

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await api.get("/users", {
        params: {
          page,
          limit: 10,
          sortBy,
          sortOrder,
          ...(search && { search }),
          ...(isOnboarded !== "" && { isOnboarded }),
        },
      })
      setUsers(data.data.users)
      setPagination(data.data.pagination)
    } catch (err) {
      console.error("Failed to fetch users:", err)
    } finally {
      setLoading(false)
    }
  }, [page, search, isOnboarded, sortBy, sortOrder])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const handleSearch = () => {
    setPage(1)
    setSearch(searchInput)
  }

  const toggleSort = (col: string) => {
    if (sortBy === col) {
      setSortOrder(prev => prev === "asc" ? "desc" : "asc")
    } else {
      setSortBy(col)
      setSortOrder("asc")
    }
    setPage(1)
  }

  const handleSave = async (id: string, form: EditForm) => {
    try {
      await api.patch(`/users/${id}`, form)
      setEditingUser(null)
      fetchUsers()
    } catch (err) {
      console.error("Failed to update user:", err)
    }
  }

  const SortIcon = ({ col }: { col: string }) => {
    if (sortBy !== col) return <span className="text-zinc-700">↕</span>
    return <span className="text-cyan-400">{sortOrder === "asc" ? "↑" : "↓"}</span>
  }

  const pageNumbers = () => {
    if (!pagination) return []
    return Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
      .filter(p => p === 1 || p === pagination.totalPages || Math.abs(p - page) <= 1)
      .reduce<(number | "...")[]>((acc, p, i, arr) => {
        if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("...")
        acc.push(p)
        return acc
      }, [])
  }

  return (
    <>
      {editingUser && (
        <EditModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSave}
        />
      )}
      {editingLunaUser && (
        <LunaPersonalityModal
          user={editingLunaUser}
          onClose={() => setEditingLunaUser(null)}
        />
      )}

      <div className="space-y-6">

        {/* Page Header */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <h1 className="text-[11px] font-bold text-foreground tracking-widest uppercase">Users</h1>
            <p className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider font-medium">
              {pagination ? `${pagination.total} total records` : "—"}
            </p>
          </div>
          <button
            onClick={fetchUsers}
            className="flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground border border-border bg-card hover:bg-muted rounded-lg transition-colors"
          >
            <MdRefresh className={`text-sm ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-muted border border-border rounded-lg px-3 h-10 flex-1 min-w-52 max-w-sm">
            <MdSearch className="text-muted-foreground text-sm shrink-0" />
            <input
              type="text"
              placeholder="Search name, email or ID..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
            />
          </div>
          <button
            onClick={handleSearch}
            className="h-10 px-5 bg-primary text-primary-foreground text-[11px] font-bold tracking-widest uppercase rounded-lg hover:bg-primary/90 transition-colors shadow-[0_0_10px_rgba(245,197,24,0.1)]"
          >
            Search
          </button>
          <select
            value={isOnboarded}
            onChange={(e) => { setIsOnboarded(e.target.value); setPage(1) }}
            className="h-10 bg-muted border border-border rounded-lg px-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          >
            <option value="">All Users</option>
            <option value="true">Onboarded</option>
            <option value="false">Not Onboarded</option>
          </select>
        </div>

        {/* Table */}
        <div className="border border-border bg-card rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                {[
                  { label: "User", col: "name" },
                  { label: "Email", col: "email" },
                  { label: "Location", col: null },
                  { label: "Onboarded", col: null },
                  { label: "Last Active", col: "lastActiveAt" },
                  { label: "Joined", col: "createdAt" },
                  { label: "", col: null },
                ].map(({ label, col }, i) => (
                  <th
                    key={i}
                    onClick={() => col && toggleSort(col)}
                    className={`text-left px-4 py-3 text-[11px] font-bold tracking-widest uppercase text-muted-foreground ${col ? "cursor-pointer hover:text-foreground transition-colors" : ""}`}
                  >
                    <span className="flex items-center gap-1.5">
                      {label}
                      {col && <SortIcon col={col} />}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                Array.from({ length: 8 }).map((_, i) => (
                  <tr key={i} className="border-b border-border/50">
                    {Array.from({ length: 7 }).map((_, j) => (
                      <td key={j} className="px-4 py-3">
                        <div className="h-3 bg-muted rounded animate-pulse w-24" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-16 text-center text-sm text-muted-foreground">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="border-b border-border hover:bg-muted/30 transition-colors group">

                    {/* User cell — name only clickable if onboarded */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {user.image ? (
                          <img src={user.image} alt="" className="h-8 w-8 rounded-lg object-cover border border-border" />
                        ) : (
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-xs font-bold text-primary shrink-0">
                            {user.name?.charAt(0).toUpperCase() ?? "?"}
                          </div>
                        )}
                        <div>
                          {user.isOnboarded ? (
                            <Link
                              href={`/dashboard/users/${user.id}`}
                              className="text-sm font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                            >
                              {user.name ?? "—"}
                            </Link>
                          ) : (
                            <Tooltip text="User has not completed onboarding">
                              <span className="text-sm font-medium text-muted-foreground cursor-default">
                                {user.name ?? "—"}
                              </span>
                            </Tooltip>
                          )}
                          {user.customId && (
                            <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{user.customId}</p>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-sm text-muted-foreground">{user.email ?? "—"}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{user.currentLocation ?? "—"}</td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${user.isOnboarded ? "bg-primary shadow-[0_0_5px_rgba(245,197,24,0.5)]" : "bg-muted-foreground"}`} />
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{user.isOnboarded ? "Yes" : "No"}</span>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-xs text-muted-foreground font-medium">
                      {user.lastActiveAt
                        ? new Date(user.lastActiveAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                        : "—"}
                    </td>

                    <td className="px-4 py-3 text-xs text-muted-foreground font-medium">
                      {new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">

                        {/* Edit — always visible */}
                        <button
                          onClick={() => setEditingUser(user)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground border border-border bg-card hover:bg-muted rounded-lg transition-all"
                        >
                          <MdEdit className="text-[14px]" />
                          Edit
                        </button>

                        {/* Prompt — always visible */}
                        <button
                          onClick={() => setEditingLunaUser(user)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-primary hover:text-primary/90 border border-primary/30 hover:border-primary/50 rounded-lg transition-all bg-primary/10 hover:bg-primary/20"
                        >
                          <MdAutoAwesome className="text-[14px]" />
                          Prompt
                        </button>

                        {/* User Profile — only if onboarded; tooltip if not */}
                        {user.isOnboarded ? (
                          <button
                            onClick={() => router.push(`/dashboard/users/${user.id}`)}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-primary hover:text-primary/90 border border-primary/30 hover:border-primary/50 rounded-lg transition-all bg-primary/10 hover:bg-primary/20"
                          >
                            <MdAutoAwesome className="text-[14px]" />
                            User Profile
                          </button>
                        ) : (
                          <Tooltip text="User has not completed onboarding">
                            <button
                              disabled
                              className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-muted-foreground border border-border rounded-lg bg-muted/50 opacity-50 cursor-not-allowed"
                            >
                              <MdAutoAwesome className="text-[14px]" />
                              User Profile
                            </button>
                          </Tooltip>
                        )}

                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage(p => p - 1)}
                disabled={!pagination.hasPrev}
                className="h-8 px-3 text-[10px] font-bold tracking-widest uppercase text-muted-foreground border border-border bg-card rounded-lg hover:bg-muted hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>

              {pageNumbers().map((p, i) =>
                p === "..." ? (
                  <span key={i} className="text-[10px] font-bold text-muted-foreground px-1">...</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p as number)}
                    className={`h-8 w-8 text-[11px] font-bold rounded-lg border transition-colors ${page === p
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                      }`}
                  >
                    {p}
                  </button>
                )
              )}

              <button
                onClick={() => setPage(p => p + 1)}
                disabled={!pagination.hasNext}
                className="h-8 px-3 text-[10px] font-bold tracking-widest uppercase text-muted-foreground border border-border bg-card rounded-lg hover:bg-muted hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  )
}