/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import api from "@/lib/axios";

// ── Types ──────────────────────────────────────────────────────────────────
type ModuleType =
  | "PICKUP_LINE"
  | "RELIGION_BASED"
  | "HUMOR"
  | "FLIRT"
  | "DEEP_TALK"
  | "MOTIVATIONAL"
  | "GREETING"
  | "COMPLIMENT"
  | "TEASING"
  | "PROACTIVE";

type ReligionType =
  | "ISLAM"
  | "HINDUISM"
  | "CHRISTIANITY"
  | "SIKHISM"
  | "BUDDHISM"
  | "JUDAISM"
  | "ATHEIST"
  | "OTHER"
  | "NONE";

type ModuleStatus = "ACTIVE" | "INACTIVE" | "DRAFT";

interface Module {
  id: string;
  type: ModuleType;
  title: string;
  description?: string;
  prompt: string;
  religion: ReligionType;
  moodTags: string[];
  tags: string[];
  language: string;
  status: ModuleStatus;
  priority: number;
  isDefault: boolean;
  isNsfw: boolean;
  usageCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

interface BulkUploadRow {
  row: number;
  title: string;
  type: string;
  status: "valid" | "error";
  reason?: string;
}

interface BulkUploadResult {
  total: number;
  inserted: number;
  skipped: number;
  preview: BulkUploadRow[];
  errors: Array<{ row: number; reason: string }>;
}

const MODULE_TYPES: ModuleType[] = [
  "PICKUP_LINE", "RELIGION_BASED", "HUMOR", "FLIRT", "DEEP_TALK",
  "MOTIVATIONAL", "GREETING", "COMPLIMENT", "TEASING", "PROACTIVE",
];

const RELIGION_TYPES: ReligionType[] = [
  "NONE", "ISLAM", "HINDUISM", "CHRISTIANITY", "SIKHISM",
  "BUDDHISM", "JUDAISM", "ATHEIST", "OTHER",
];

const STATUS_TYPES: ModuleStatus[] = ["ACTIVE", "INACTIVE", "DRAFT"];

const TYPE_COLORS: Record<string, string> = {
  PICKUP_LINE:    "bg-primary/10 text-primary border-primary/20",
  RELIGION_BASED: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  HUMOR:          "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  FLIRT:          "bg-rose-500/10 text-rose-500 border-rose-500/20",
  DEEP_TALK:      "bg-blue-500/10 text-blue-500 border-blue-500/20",
  MOTIVATIONAL:   "bg-green-500/10 text-green-500 border-green-500/20",
  GREETING:       "bg-teal-500/10 text-teal-500 border-teal-500/20",
  COMPLIMENT:     "bg-purple-500/10 text-purple-500 border-purple-500/20",
  TEASING:        "bg-orange-500/10 text-orange-500 border-orange-500/20",
  PROACTIVE:      "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
};

const STATUS_COLORS: Record<string, string> = {
  ACTIVE:   "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  INACTIVE: "bg-muted text-muted-foreground border-border",
  DRAFT:    "bg-primary/10 text-primary border-primary/20",
};

const emptyForm = {
  type: "GREETING" as ModuleType,
  title: "",
  description: "",
  prompt: "",
  religion: "NONE" as ReligionType,
  moodTags: "",
  tags: "",
  language: "en",
  status: "ACTIVE" as ModuleStatus,
  priority: 0,
  isDefault: false,
  isNsfw: false,
};

// ── API helpers ────────────────────────────────────────────────────────────
const moduleApi = {
  getAll: (params: Record<string, string>) =>
    api.get("/modules", { params }).then((r: any) => r.data.data),
  getById: (id: string) =>
    api.get(`/modules/${id}`).then((r: any) => r.data.data),
  create: (data: any) =>
    api.post("/modules", data).then((r: any) => r.data.data),
  update: (id: string, data: any) =>
    api.patch(`/modules/${id}`, data).then((r: any) => r.data.data),
  remove: (id: string) =>
    api.delete(`/modules/${id}`).then((r: any) => r.data.data),
  bulkUpload: (file: File): Promise<{ success: boolean; message: string; data: BulkUploadResult }> => {
    const form = new FormData();
    form.append("file", file);
    return api
      .post("/modules/bulk-upload", form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((r: any) => r.data)
      .catch((e: any) => {
        // Axios throws on 422 — still return the payload
        if (e.response?.data) return e.response.data;
        throw e;
      });
  },
};

// ── Sub-components ─────────────────────────────────────────────────────────
function Badge({ label, className }: { label: string; className: string }) {
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${className}`}>
      {label.replace(/_/g, " ")}
    </span>
  );
}

function Spinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-border bg-card p-4">
      <span className="text-xs tracking-widest text-muted-foreground uppercase font-bold">{label}</span>
      <span className="font-mono text-2xl font-bold text-foreground">{value}</span>
      {sub && <span className="text-xs text-muted-foreground">{sub}</span>}
    </div>
  );
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="text-lg font-heading font-bold text-foreground">{title}</h2>
          <button onClick={onClose} className="text-xl leading-none text-muted-foreground transition-colors hover:text-foreground">×</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ── Bulk Upload Dialog ─────────────────────────────────────────────────────
function BulkUploadDialog({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<BulkUploadResult | null>(null);
  const [succeeded, setSucceeded] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(null);
    setErrMsg(null);
    setSucceeded(false);
    setFile(e.target.files?.[0] ?? null);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setErrMsg(null);
    try {
      const res = await moduleApi.bulkUpload(file);
      setResult(res.data);
      if (res.success) {
        setSucceeded(true);
        onSuccess();
      }
    } catch (e: any) {
      setErrMsg(e.message ?? "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const validRows   = result?.preview.filter((r) => r.status === "valid") ?? [];
  const errorRows   = result?.preview.filter((r) => r.status === "error") ?? [];
  const hasErrors   = errorRows.length > 0;

  return (
    <Modal title="Bulk Upload Modules" onClose={onClose}>
      <div className="space-y-5">

        {/* Step 1 — Download template */}
        <div className="rounded-lg border border-border bg-muted/40 p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Step 1 — Download Template
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            Fill in the Excel template with your module data. Required columns:{" "}
            <code className="text-primary text-xs">type</code>,{" "}
            <code className="text-primary text-xs">title</code>,{" "}
            <code className="text-primary text-xs">prompt</code>.
          </p>
          <a
            href="/templates/module-bulk-upload-template.xlsx"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs font-bold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            ↓ Download Template (.xlsx)
          </a>
        </div>

        {/* Step 2 — Pick file */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Step 2 — Upload Filled File
          </p>
          <div
            onClick={() => fileRef.current?.click()}
            className={`cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-colors ${
              file ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/40"
            }`}
          >
            <input
              ref={fileRef}
              type="file"
              accept=".xlsx,.xls,.csv"
              className="hidden"
              onChange={handleFile}
            />
            {file ? (
              <div className="space-y-1">
                <p className="text-2xl">📄</p>
                <p className="text-sm font-medium text-foreground">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(1)} KB · Click to change
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                <p className="text-2xl text-muted-foreground">⬆</p>
                <p className="text-sm text-muted-foreground">
                  Click to select .xlsx / .xls / .csv
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Error message */}
        {errMsg && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {errMsg}
          </div>
        )}

        {/* Preview table */}
        {result && (
          <div className="space-y-3">
            {/* Summary bar */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
                Total: {result.total}
              </span>
              <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-500">
                ✓ Valid: {validRows.length}
              </span>
              {hasErrors && (
                <span className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-bold text-destructive">
                  ✕ Errors: {errorRows.length}
                </span>
              )}
              {succeeded && (
                <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400">
                  ✓ Inserted: {result.inserted}
                </span>
              )}
            </div>

            {/* All-or-nothing notice */}
            {hasErrors && (
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-400 font-medium">
                ⚠ {errorRows.length} row(s) have errors. <strong>Nothing was inserted.</strong> Fix the errors in your file and re-upload.
              </div>
            )}

            {succeeded && (
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400 font-medium">
                ✓ All {result.inserted} modules inserted successfully.
              </div>
            )}

            {/* Row-by-row preview */}
            <div className="max-h-64 overflow-y-auto rounded-xl border border-border">
              <table className="w-full text-xs">
                <thead className="sticky top-0 bg-muted/90 backdrop-blur">
                  <tr className="border-b border-border">
                    {["Row", "Title", "Type", "Status"].map((h) => (
                      <th key={h} className="px-3 py-2 text-left font-bold uppercase tracking-widest text-muted-foreground">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {result.preview.map((r) => (
                    <tr key={r.row} className={r.status === "error" ? "bg-destructive/5" : ""}>
                      <td className="px-3 py-2 font-mono text-muted-foreground">{r.row}</td>
                      <td className="px-3 py-2 text-foreground max-w-40 truncate">{r.title}</td>
                      <td className="px-3 py-2">
                        {r.type ? (
                          <Badge label={r.type} className={TYPE_COLORS[r.type] ?? "bg-muted text-muted-foreground border-border"} />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="px-3 py-2">
                        {r.status === "valid" ? (
                          <span className="text-emerald-500 font-bold">✓ Valid</span>
                        ) : (
                          <span className="text-destructive font-bold" title={r.reason}>✕ {r.reason}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 pt-1">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-border bg-muted py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-border"
          >
            {succeeded ? "Close" : "Cancel"}
          </button>
          {!succeeded && (
            <button
              onClick={handleUpload}
              disabled={!file || uploading}
              className="flex-1 rounded-lg bg-primary py-2.5 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_15px_rgba(245,197,24,0.1)] transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {uploading ? "Uploading..." : result && hasErrors ? "Re-upload Fixed File" : "Upload & Insert"}
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}

// ── Form ───────────────────────────────────────────────────────────────────
function ModuleForm({ initial, onSubmit, loading }: { initial: typeof emptyForm; onSubmit: (data: typeof emptyForm) => void; loading: boolean }) {
  const [form, setForm] = useState(initial);
  const set = (k: string, v: any) => setForm((f) => ({ ...f, [k]: v }));

  const inputCls = "w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all";
  const labelCls = "block text-[11px] font-bold text-muted-foreground mb-1.5 uppercase tracking-widest";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Type</label>
          <select className={inputCls} value={form.type} onChange={(e) => set("type", e.target.value)}>
            {MODULE_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Status</label>
          <select className={inputCls} value={form.status} onChange={(e) => set("status", e.target.value)}>
            {STATUS_TYPES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Title</label>
        <input className={inputCls} placeholder="Islamic Morning Greeting" value={form.title} onChange={(e) => set("title", e.target.value)} />
      </div>

      <div>
        <label className={labelCls}>Description</label>
        <input className={inputCls} placeholder="Optional description" value={form.description} onChange={(e) => set("description", e.target.value)} />
      </div>

      <div>
        <label className={labelCls}>Prompt Template</label>
        <textarea className={`${inputCls} min-h-25 resize-y font-mono`} placeholder="Use {userName}, {botName}, {mood} as placeholders" value={form.prompt} onChange={(e) => set("prompt", e.target.value)} />
        <p className="mt-1.5 text-[11px] text-muted-foreground">Placeholders: {"{userName}"} {"{botName}"} {"{mood}"}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Religion</label>
          <select className={inputCls} value={form.religion} onChange={(e) => set("religion", e.target.value)}>
            {RELIGION_TYPES.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Language</label>
          <input className={inputCls} placeholder="en" value={form.language} onChange={(e) => set("language", e.target.value)} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Mood Tags</label>
          <input className={inputCls} placeholder="happy, sad, romantic" value={form.moodTags} onChange={(e) => set("moodTags", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Tags</label>
          <input className={inputCls} placeholder="morning, flirty, gentle" value={form.tags} onChange={(e) => set("tags", e.target.value)} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Priority (higher = used more)</label>
        <input type="number" className={inputCls} value={form.priority} onChange={(e) => set("priority", Number(e.target.value))} />
      </div>

      <div className="flex gap-6 pt-2">
        {[["isDefault", "Default Fallback"], ["isNsfw", "NSFW"]].map(([key, label]) => (
          <label key={key} className="flex cursor-pointer items-center gap-2">
            <div onClick={() => set(key, !(form as any)[key])} className={`relative h-5 w-9 rounded-full transition-colors ${(form as any)[key] ? "bg-primary" : "bg-muted border border-border"}`}>
              <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${(form as any)[key] ? "translate-x-4 mix-blend-difference" : "translate-x-0.5"}`} />
            </div>
            <span className="text-sm text-muted-foreground font-medium">{label}</span>
          </label>
        ))}
      </div>

      <button
        onClick={() => onSubmit(form)}
        disabled={loading || !form.title || !form.prompt}
        className="w-full rounded-lg bg-primary py-3 text-sm font-bold tracking-widest uppercase text-primary-foreground shadow-[0_0_15px_rgba(245,197,24,0.1)] transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40 mt-4"
      >
        {loading ? "Saving..." : "Save Module"}
      </button>
    </div>
  );
}

// ── Detail View ────────────────────────────────────────────────────────────
function ModuleDetail({ module }: { module: Module }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge label={module.type} className={TYPE_COLORS[module.type]} />
        <Badge label={module.status} className={STATUS_COLORS[module.status]} />
        {module.religion !== "NONE" && <Badge label={module.religion} className="border-amber-500/30 bg-amber-500/15 text-amber-400" />}
        {module.isDefault && <Badge label="DEFAULT" className="border-primary/30 bg-primary/10 text-primary" />}
        {module.isNsfw && <Badge label="NSFW" className="border-destructive/30 bg-destructive/10 text-destructive" />}
      </div>

      <div>
        <p className="mb-1.5 text-[11px] font-bold tracking-widest text-muted-foreground uppercase">Prompt Template</p>
        <div className="rounded-lg border border-border bg-muted p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-foreground">{module.prompt}</div>
      </div>

      {module.description && (
        <div>
          <p className="mb-1.5 text-[11px] font-bold tracking-widest text-muted-foreground uppercase">Description</p>
          <p className="text-sm text-foreground">{module.description}</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-3">
        {[["Usage Count", module.usageCount], ["Priority", module.priority], ["Language", module.language]].map(([k, v]) => (
          <div key={String(k)} className="rounded-lg border border-border bg-muted p-3">
            <p className="text-xs text-muted-foreground font-medium">{k}</p>
            <p className="font-mono text-lg font-bold text-foreground">{v}</p>
          </div>
        ))}
      </div>

      {module.tags.length > 0 && (
        <div>
          <p className="mb-2 text-[11px] font-bold tracking-widest text-muted-foreground uppercase">Tags</p>
          <div className="flex flex-wrap gap-1.5">
            {module.tags.map((t) => (
              <span key={t} className="rounded-md border border-border bg-background px-2 py-1 text-[11px] font-medium text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      )}

      {module.moodTags.length > 0 && (
        <div>
          <p className="mb-2 text-xs tracking-wider text-slate-500 uppercase">Mood Tags</p>
          <div className="flex flex-wrap gap-1">
            {module.moodTags.map((t) => (
              <span key={t} className="rounded-md border border-pink-500/20 bg-pink-500/10 px-2 py-0.5 text-xs text-pink-300">{t}</span>
            ))}
          </div>
        </div>
      )}

      <p className="text-xs text-slate-600">
        Created {new Date(module.createdAt).toLocaleDateString()} · Updated{" "}
        {new Date(module.updatedAt).toLocaleDateString()}
      </p>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function ModulePage() {
  const [modules, setModules]         = useState<Module[]>([]);
  const [loading, setLoading]         = useState(true);
  const [saving, setSaving]           = useState(false);
  const [error, setError]             = useState<string | null>(null);

  // Filters
  const [filterType, setFilterType]         = useState<string>("ALL");
  const [filterReligion, setFilterReligion] = useState<string>("ALL");
  const [filterStatus, setFilterStatus]     = useState<string>("ALL");
  const [search, setSearch]                 = useState("");

  // Modals
  const [showCreate, setShowCreate]     = useState(false);
  const [showBulk, setShowBulk]         = useState(false);
  const [editTarget, setEditTarget]     = useState<Module | null>(null);
  const [viewTarget, setViewTarget]     = useState<Module | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Module | null>(null);

  // ── Fetch ────────────────────────────────────────
  const fetchModules = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params: Record<string, string> = {};
      if (filterType !== "ALL") params.type = filterType;
      if (filterReligion !== "ALL") params.religion = filterReligion;
      if (filterStatus !== "ALL") params.status = filterStatus;
      const data = await moduleApi.getAll(params);
      setModules(data.result ?? []);
    } catch (e: any) {
      setError(e.response?.data?.message ?? e.message);
    } finally {
      setLoading(false);
    }
  }, [filterType, filterReligion, filterStatus]);

  useEffect(() => { fetchModules(); }, [fetchModules]);

  // ── Create ───────────────────────────────────────
  const handleCreate = async (form: typeof emptyForm) => {
    setSaving(true);
    try {
      await moduleApi.create({
        ...form,
        moodTags: form.moodTags.split(",").map((s) => s.trim()).filter(Boolean),
        tags: form.tags.split(",").map((s) => s.trim()).filter(Boolean),
      });
      setShowCreate(false);
      fetchModules();
    } catch (e: any) {
      setError(e.response?.data?.message ?? e.message);
    } finally {
      setSaving(false);
    }
  };

  // ── Update ───────────────────────────────────────
  const handleUpdate = async (form: typeof emptyForm) => {
    if (!editTarget) return;
    setSaving(true);
    try {
      await moduleApi.update(editTarget.id, {
        ...form,
        moodTags: form.moodTags.split(",").map((s) => s.trim()).filter(Boolean),
        tags: form.tags.split(",").map((s) => s.trim()).filter(Boolean),
      });
      setEditTarget(null);
      fetchModules();
    } catch (e: any) {
      setError(e.response?.data?.message ?? e.message);
    } finally {
      setSaving(false);
    }
  };

  // ── Delete ───────────────────────────────────────
  const handleDelete = async () => {
    if (!deleteTarget) return;
    setSaving(true);
    try {
      await moduleApi.remove(deleteTarget.id);
      setDeleteTarget(null);
      fetchModules();
    } catch (e: any) {
      setError(e.response?.data?.message ?? e.message);
    } finally {
      setSaving(false);
    }
  };

  const filtered = (modules ?? []).filter(
    (m) =>
      search === "" ||
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.prompt.toLowerCase().includes(search.toLowerCase())
  );

  const activeCount = modules.filter((m) => m.status === "ACTIVE").length;
  const totalUsage  = modules.reduce((acc, m) => acc + m.usageCount, 0);
  const religionCount = new Set(modules.filter((m) => m.religion !== "NONE").map((m) => m.religion)).size;

  return (
    <main className="bg-background min-h-screen text-foreground">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-6 py-5">
        <div>
          <h1 className="text-2xl font-heading font-bold tracking-tight">Prompt Modules</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage injectable prompt templates for the AI engine</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowBulk(true)}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-bold tracking-wide text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            ⬆ Bulk Upload
          </button>
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 shadow-[0_0_10px_rgba(245,197,24,0.15)]"
          >
            <span className="text-lg leading-none">+</span> New Module
          </button>
        </div>
      </div>

      <div className="space-y-6 px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <StatCard label="Total Modules" value={modules.length} />
          <StatCard label="Active" value={activeCount} sub={`${modules.length - activeCount} inactive`} />
          <StatCard label="Total Usage" value={totalUsage.toLocaleString()} sub="across all modules" />
          <StatCard label="Religions" value={religionCount} sub="covered" />
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center justify-between rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive font-medium">
            {error}
            <button onClick={() => setError(null)} className="ml-4 text-destructive hover:text-destructive/80">×</button>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <input
            className="w-48 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="Search modules..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {[
            { label: "Type", value: filterType, set: setFilterType, options: ["ALL", ...MODULE_TYPES] },
            { label: "Religion", value: filterReligion, set: setFilterReligion, options: ["ALL", ...RELIGION_TYPES] },
            { label: "Status", value: filterStatus, set: setFilterStatus, options: ["ALL", ...STATUS_TYPES] },
          ].map(({ label, value, set, options }) => (
            <select key={label} value={value} onChange={(e) => set(e.target.value)} className="rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none">
              {options.map((o) => <option key={o}>{o === "ALL" ? `All ${label}s` : o}</option>)}
            </select>
          ))}
          <button onClick={fetchModules} className="rounded-lg border border-border bg-muted px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-border focus:ring-1 focus:ring-primary focus:outline-none">
            ↻ Refresh
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            {filtered.length === 0 ? (
              <div className="py-16 text-center text-muted-foreground">
                <p className="mb-3 text-4xl">◈</p>
                <p className="text-sm">No modules found</p>
                <button onClick={() => setShowCreate(true)} className="mt-3 text-sm font-medium text-primary hover:underline hover:text-primary/80">
                  Create your first module →
                </button>
              </div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    {["Title", "Type", "Religion", "Status", "Priority", "Usage", ""].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-[11px] font-bold tracking-widest text-muted-foreground uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map((m) => (
                    <tr key={m.id} className="group transition-colors hover:bg-muted/50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-medium text-foreground">{m.title}</p>
                            <p className="max-w-50 truncate text-xs text-muted-foreground mt-0.5">{m.prompt.slice(0, 60)}…</p>
                          </div>
                          {m.isDefault && <Badge label="DEFAULT" className="border-primary/30 bg-primary/10 text-primary uppercase font-bold tracking-wider text-[10px]" />}
                        </div>
                      </td>
                      <td className="px-4 py-3"><Badge label={m.type} className={TYPE_COLORS[m.type]} /></td>
                      <td className="px-4 py-3">
                        {m.religion === "NONE" ? (
                          <span className="text-xs text-muted-foreground font-medium">—</span>
                        ) : (
                          <Badge label={m.religion} className="border-amber-500/30 bg-amber-500/15 text-amber-500 font-bold" />
                        )}
                      </td>
                      <td className="px-4 py-3"><Badge label={m.status} className={STATUS_COLORS[m.status]} /></td>
                      <td className="px-4 py-3 font-mono text-muted-foreground font-medium">{m.priority}</td>
                      <td className="px-4 py-3 font-mono text-muted-foreground font-medium">{m.usageCount.toLocaleString()}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                          <button onClick={() => setViewTarget(m)} className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" title="View">◉</button>
                          <button onClick={() => setEditTarget(m)} className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-indigo-500/10 hover:text-indigo-400" title="Edit">✎</button>
                          <button onClick={() => setDeleteTarget(m)} className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-red-500/10 hover:text-red-400" title="Delete">✕</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        <p className="text-xs text-slate-600">{filtered.length} of {modules.length} modules</p>
      </div>

      {/* Bulk Upload Dialog */}
      {showBulk && (
        <BulkUploadDialog
          onClose={() => setShowBulk(false)}
          onSuccess={fetchModules}
        />
      )}

      {/* Create Modal */}
      {showCreate && (
        <Modal title="New Prompt Module" onClose={() => setShowCreate(false)}>
          <ModuleForm initial={emptyForm} onSubmit={handleCreate} loading={saving} />
        </Modal>
      )}

      {/* Edit Modal */}
      {editTarget && (
        <Modal title="Edit Module" onClose={() => setEditTarget(null)}>
          <ModuleForm
            initial={{
              type: editTarget.type,
              title: editTarget.title,
              description: editTarget.description ?? "",
              prompt: editTarget.prompt,
              religion: editTarget.religion,
              moodTags: editTarget.moodTags.join(", "),
              tags: editTarget.tags.join(", "),
              language: editTarget.language,
              status: editTarget.status,
              priority: editTarget.priority,
              isDefault: editTarget.isDefault,
              isNsfw: editTarget.isNsfw,
            }}
            onSubmit={handleUpdate}
            loading={saving}
          />
        </Modal>
      )}

      {/* View Modal */}
      {viewTarget && (
        <Modal title={viewTarget.title} onClose={() => setViewTarget(null)}>
          <ModuleDetail module={viewTarget} />
        </Modal>
      )}

      {/* Delete Confirm Modal */}
      {deleteTarget && (
        <Modal title="Delete Module" onClose={() => setDeleteTarget(null)}>
          <div className="space-y-4">
            <p className="text-sm text-slate-300">
              Are you sure you want to delete{" "}
              <span className="font-medium text-white">&quot;{deleteTarget.title}&quot;</span>? This action cannot be undone.
            </p>
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3">
              <p className="text-xs text-red-400">
                This module has been used <strong>{deleteTarget.usageCount}</strong> times in prompts.
              </p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setDeleteTarget(null)} className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10">Cancel</button>
              <button onClick={handleDelete} disabled={saving} className="flex-1 rounded-lg bg-red-600 py-2 text-sm font-medium text-white transition-colors hover:bg-red-500 disabled:opacity-40">
                {saving ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}