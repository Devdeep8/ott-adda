"use client";

import { useState, useEffect, useCallback } from "react";
import { cmsService, CmsPage, CmsSeo } from "@/lib/services/cms";

// ── Shared UI ──────────────────────────────────────────────────────────────
function Badge({ label, className }: { label: string; className: string }) {
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${className}`}>
      {label}
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

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="text-lg font-heading font-bold text-foreground">{title}</h2>
          <button onClick={onClose} className="text-xl leading-none text-muted-foreground transition-colors hover:text-foreground">×</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ── Cms Page Form ──────────────────────────────────────────────────────────
const emptyPageForm = {
  title: "",
  slug: "",
  content: "",
  pageType: "custom" as "custom" | "system",
  status: "draft" as "draft" | "published",
};

const emptySeoForm = {
  metaTitle: "",
  metaDescription: "",
  keywords: "",
  canonicalUrl: "",
  robots: "index,follow",
};

function CmsPageForm({
  initialPage,
  initialSeo,
  onSubmit,
  loading,
}: {
  initialPage?: Partial<CmsPage>;
  initialSeo?: Partial<CmsSeo>;
  onSubmit: (pageData: any, seoData: any) => void;
  loading: boolean;
}) {
  const [pageForm, setPageForm] = useState({ ...emptyPageForm, ...initialPage });
  const [seoForm, setSeoForm] = useState({ ...emptySeoForm, ...initialSeo });
  const [activeTab, setActiveTab] = useState<"content" | "seo">("content");

  const setP = (k: string, v: any) => setPageForm((f) => ({ ...f, [k]: v }));
  const setS = (k: string, v: any) => setSeoForm((f) => ({ ...f, [k]: v }));

  const inputCls = "w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all";
  const labelCls = "block text-[11px] font-bold text-muted-foreground mb-1.5 uppercase tracking-widest";

  const isSystem = pageForm.pageType === "system";

  return (
    <div className="space-y-4">
      <div className="flex border-b border-border mb-4">
        <button
          onClick={() => setActiveTab("content")}
          className={`px-4 py-2 text-sm font-bold tracking-wide transition-colors ${activeTab === "content" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
        >
          Page Content
        </button>
        <button
          onClick={() => setActiveTab("seo")}
          className={`px-4 py-2 text-sm font-bold tracking-wide transition-colors ${activeTab === "seo" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
        >
          SEO Meta Tags
        </button>
      </div>

      {activeTab === "content" && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Title</label>
              <input className={inputCls} placeholder="Privacy Policy" value={pageForm.title} onChange={(e) => setP("title", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Slug {isSystem && "(Locked for system pages)"}</label>
              <input className={inputCls} disabled={initialPage && isSystem && !!initialPage.id} placeholder="privacy-policy" value={pageForm.slug} onChange={(e) => setP("slug", e.target.value.toLowerCase().replace(/\\s+/g, "-"))} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Page Type</label>
              <select className={inputCls} value={pageForm.pageType} onChange={(e) => setP("pageType", e.target.value)} disabled={initialPage && isSystem && !!initialPage.id}>
                <option value="custom">Custom</option>
                <option value="system">System</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Status</label>
              <select className={inputCls} value={pageForm.status} onChange={(e) => setP("status", e.target.value)}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
          <div>
            <label className={labelCls}>HTML Content</label>
            <textarea className={`${inputCls} min-h-[300px] font-mono`} placeholder="<h1>Content goes here...</h1>" value={pageForm.content} onChange={(e) => setP("content", e.target.value)} />
          </div>
        </div>
      )}

      {activeTab === "seo" && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
          <div>
            <label className={labelCls}>Meta Title</label>
            <input className={inputCls} placeholder="Privacy Policy - Haannaa" value={seoForm.metaTitle || ""} onChange={(e) => setS("metaTitle", e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Meta Description</label>
            <textarea className={`${inputCls} min-h-24`} placeholder="A brief description of this page for search engines..." value={seoForm.metaDescription || ""} onChange={(e) => setS("metaDescription", e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Keywords (comma separated)</label>
            <input className={inputCls} placeholder="privacy, policy, data, haannaa" value={seoForm.keywords || ""} onChange={(e) => setS("keywords", e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Canonical URL</label>
              <input className={inputCls} placeholder="https://haannaa.com/pages/privacy-policy" value={seoForm.canonicalUrl || ""} onChange={(e) => setS("canonicalUrl", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Robots</label>
              <input className={inputCls} placeholder="index,follow" value={seoForm.robots || ""} onChange={(e) => setS("robots", e.target.value)} />
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => onSubmit(pageForm, seoForm)}
        disabled={loading || !pageForm.title || !pageForm.slug || !pageForm.content}
        className="w-full rounded-lg bg-primary py-3 text-sm font-bold tracking-widest uppercase text-primary-foreground shadow-[0_0_15px_rgba(245,197,24,0.1)] transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40 mt-6"
      >
        {loading ? "Saving..." : "Save Page & SEO"}
      </button>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function CmsPagesPage() {
  const [pages, setPages] = useState<CmsPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Modals
  const [showCreate, setShowCreate] = useState(false);
  const [editTarget, setEditTarget] = useState<CmsPage | null>(null);
  const [editSeoTarget, setEditSeoTarget] = useState<CmsSeo | null>(null);

  const fetchPages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await cmsService.getAllPages();
      // The backend responseMiddleware wraps it in .data, and the service returns { data: [...] }
      setPages(response.data?.data ?? []);
    } catch (e: any) {
      setError(e.response?.data?.message ?? e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  const handleCreate = async (pageData: any, seoData: any) => {
    setSaving(true);
    try {
      // 1. Create Page
      const newPage = await cmsService.createPage(pageData);
      // 2. Create SEO
      if (seoData.metaTitle || seoData.metaDescription) {
        await cmsService.createSeo({
          pageIdentifier: newPage.slug,
          pageType: "cms",
          cmsPageId: newPage.id,
          ...seoData
        });
      }
      setShowCreate(false);
      fetchPages();
    } catch (e: any) {
      setError(e.response?.data?.message ?? e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleUpdate = async (pageData: any, seoData: any) => {
    if (!editTarget) return;
    setSaving(true);
    try {
      await cmsService.updatePage(editTarget.id, pageData);

      if (editSeoTarget && editSeoTarget.id) {
        // Update existing SEO
        await cmsService.updateSeo(editSeoTarget.id, seoData);
      } else if (seoData.metaTitle || seoData.metaDescription) {
        // Create new SEO if didn't exist
        await cmsService.createSeo({
          pageIdentifier: editTarget.slug,
          pageType: "cms",
          cmsPageId: editTarget.id,
          ...seoData
        });
      }

      setEditTarget(null);
      setEditSeoTarget(null);
      fetchPages();
    } catch (e: any) {
      setError(e.response?.data?.message ?? e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, pageType: string) => {
    if (pageType === "system") {
      alert("System pages cannot be deleted.");
      return;
    }
    if (!confirm("Are you sure you want to delete this page?")) return;
    try {
      await cmsService.deletePage(id);
      fetchPages();
    } catch (e: any) {
      setError(e.response?.data?.message ?? e.message);
    }
  };

  const handleTogglePublish = async (id: string) => {
    try {
      await cmsService.togglePublish(id);
      fetchPages();
    } catch (e: any) {
      setError(e.response?.data?.message ?? e.message);
    }
  };

  const openEditModal = async (page: CmsPage) => {
    // Fetch full page to get content
    try {
      const fullPage = await cmsService.getPageById(page.id);
      setEditTarget(fullPage);
      setEditSeoTarget(fullPage.seo || null);
    } catch (e: any) {
      setError("Could not load page details");
    }
  };

  return (
    <main className="bg-background min-h-screen text-foreground">
      <div className="flex items-center justify-between border-b border-border px-6 py-5">
        <div>
          <h1 className="text-2xl font-heading font-bold tracking-tight">Pages & SEO</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage Public CMS pages and their SEO properties.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold tracking-wide text-primary-foreground shadow-[0_0_10px_rgba(245,197,24,0.15)] transition-all hover:bg-primary/90"
          >
            <span className="text-lg leading-none">+</span> New Page
          </button>
        </div>
      </div>

      <div className="space-y-6 px-6 py-6">
        {error && (
          <div className="flex items-center justify-between rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive font-medium">
            {error}
            <button onClick={() => setError(null)} className="ml-4 text-destructive hover:text-destructive/80">×</button>
          </div>
        )}

        {loading ? (
          <Spinner />
        ) : (
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            {pages.length === 0 ? (
              <div className="py-16 text-center text-muted-foreground">
                <p className="mb-3 text-4xl">📄</p>
                <p className="text-sm">No CMS Pages found</p>
              </div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left text-[11px] font-bold tracking-widest text-muted-foreground uppercase">Title & Slug</th>
                    <th className="px-4 py-3 text-left text-[11px] font-bold tracking-widest text-muted-foreground uppercase">Type</th>
                    <th className="px-4 py-3 text-left text-[11px] font-bold tracking-widest text-muted-foreground uppercase">Status</th>
                    <th className="px-4 py-3 text-left text-[11px] font-bold tracking-widest text-muted-foreground uppercase">Last Updated</th>
                    <th className="px-4 py-3 text-left text-[11px] font-bold tracking-widest text-muted-foreground uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {pages.map((p) => (
                    <tr key={p.id} className="group transition-colors hover:bg-muted/50">
                      <td className="px-4 py-3">
                        <p className="font-medium text-foreground">{p.title}</p>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5">/{p.slug}</p>
                      </td>
                      <td className="px-4 py-3">
                        <Badge label={p.pageType} className={p.pageType === "system" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-blue-500/10 text-blue-500 border-blue-500/20"} />
                      </td>
                      <td className="px-4 py-3">
                        <button onClick={() => handleTogglePublish(p.id)} className="focus:outline-none">
                           <Badge label={p.status} className={p.status === "published" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-muted text-muted-foreground border-border"} />
                        </button>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground font-medium">
                        {new Date(p.updatedAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button onClick={() => openEditModal(p)} className="text-xs font-bold text-indigo-400 hover:underline">Edit</button>
                          {p.pageType !== "system" && (
                            <button onClick={() => handleDelete(p.id, p.pageType)} className="text-xs font-bold text-red-500 hover:underline">Delete</button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      {showCreate && (
        <Modal title="Create CMS Page" onClose={() => setShowCreate(false)}>
          <CmsPageForm onSubmit={handleCreate} loading={saving} />
        </Modal>
      )}

      {editTarget && (
        <Modal title={`Edit Page: ${editTarget.title}`} onClose={() => { setEditTarget(null); setEditSeoTarget(null); }}>
          <CmsPageForm initialPage={editTarget} initialSeo={editSeoTarget || {}} onSubmit={handleUpdate} loading={saving} />
        </Modal>
      )}
    </main>
  );
}
