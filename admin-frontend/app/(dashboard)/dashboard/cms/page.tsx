"use client";

import { useState, useEffect, useCallback } from "react";
import { cmsService, CmsPage, CmsSeo } from "@/lib/services/cms";

// ── Shared UI ──────────────────────────────────────────────────────────────
function Badge({ label, className }: { label: string; className: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}

function Spinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="border-primary h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
    </div>
  );
}

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="bg-background/80 absolute inset-0 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="border-border bg-card relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border shadow-2xl">
        <div className="border-border flex items-center justify-between border-b p-6">
          <h2 className="font-heading text-foreground text-lg font-bold">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground text-xl leading-none transition-colors"
          >
            ×
          </button>
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
  const [pageForm, setPageForm] = useState({
    ...emptyPageForm,
    ...initialPage,
  });
  const [seoForm, setSeoForm] = useState({ ...emptySeoForm, ...initialSeo });
  const [activeTab, setActiveTab] = useState<"content" | "seo">("content");

  const setP = (k: string, v: any) => setPageForm((f) => ({ ...f, [k]: v }));
  const setS = (k: string, v: any) => setSeoForm((f) => ({ ...f, [k]: v }));

  const inputCls =
    "w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all";
  const labelCls =
    "block text-[11px] font-bold text-muted-foreground mb-1.5 uppercase tracking-widest";

  const isSystem = pageForm.pageType === "system";

  return (
    <div className="space-y-4">
      <div className="border-border mb-4 flex border-b">
        <button
          onClick={() => setActiveTab("content")}
          className={`px-4 py-2 text-sm font-bold tracking-wide transition-colors ${activeTab === "content" ? "border-primary text-primary border-b-2" : "text-muted-foreground"}`}
        >
          Page Content
        </button>
        <button
          onClick={() => setActiveTab("seo")}
          className={`px-4 py-2 text-sm font-bold tracking-wide transition-colors ${activeTab === "seo" ? "border-primary text-primary border-b-2" : "text-muted-foreground"}`}
        >
          SEO Meta Tags
        </button>
      </div>

      {activeTab === "content" && (
        <div className="animate-in fade-in slide-in-from-bottom-2 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Title</label>
              <input
                className={inputCls}
                placeholder="Privacy Policy"
                value={pageForm.title}
                onChange={(e) => setP("title", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls}>
                Slug {isSystem && "(Locked for system pages)"}
              </label>
              <input
                className={inputCls}
                disabled={initialPage && isSystem && !!initialPage.id}
                placeholder="privacy-policy"
                value={pageForm.slug}
                onChange={(e) =>
                  setP(
                    "slug",
                    e.target.value.toLowerCase().replace(/\\s+/g, "-")
                  )
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Page Type</label>
              <select
                className={inputCls}
                value={pageForm.pageType}
                onChange={(e) => setP("pageType", e.target.value)}
                disabled={initialPage && isSystem && !!initialPage.id}
              >
                <option value="custom">Custom</option>
                <option value="system">System</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Status</label>
              <select
                className={inputCls}
                value={pageForm.status}
                onChange={(e) => setP("status", e.target.value)}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
          <div>
            <label className={labelCls}>HTML Content</label>
            <textarea
              className={`${inputCls} min-h-[300px] font-mono`}
              placeholder="<h1>Content goes here...</h1>"
              value={pageForm.content}
              onChange={(e) => setP("content", e.target.value)}
            />
          </div>
        </div>
      )}

      {activeTab === "seo" && (
        <div className="animate-in fade-in slide-in-from-bottom-2 space-y-4">
          <div>
            <label className={labelCls}>Meta Title</label>
            <input
              className={inputCls}
              placeholder="Privacy Policy - ott-adda"
              value={seoForm.metaTitle || ""}
              onChange={(e) => setS("metaTitle", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls}>Meta Description</label>
            <textarea
              className={`${inputCls} min-h-24`}
              placeholder="A brief description of this page for search engines..."
              value={seoForm.metaDescription || ""}
              onChange={(e) => setS("metaDescription", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls}>Keywords (comma separated)</label>
            <input
              className={inputCls}
              placeholder="privacy, policy, data, ott-adda"
              value={seoForm.keywords || ""}
              onChange={(e) => setS("keywords", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Canonical URL</label>
              <input
                className={inputCls}
                placeholder="https://ott-adda.com/pages/privacy-policy"
                value={seoForm.canonicalUrl || ""}
                onChange={(e) => setS("canonicalUrl", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls}>Robots</label>
              <input
                className={inputCls}
                placeholder="index,follow"
                value={seoForm.robots || ""}
                onChange={(e) => setS("robots", e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => onSubmit(pageForm, seoForm)}
        disabled={
          loading || !pageForm.title || !pageForm.slug || !pageForm.content
        }
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 w-full rounded-lg py-3 text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(245,197,24,0.1)] transition-all disabled:cursor-not-allowed disabled:opacity-40"
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
          ...seoData,
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
          ...seoData,
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
    <main className="bg-background text-foreground min-h-screen">
      <div className="border-border flex items-center justify-between border-b px-6 py-5">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            Pages & SEO
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage Public CMS pages and their SEO properties.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCreate(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold tracking-wide shadow-[0_0_10px_rgba(245,197,24,0.15)] transition-all"
          >
            <span className="text-lg leading-none">+</span> New Page
          </button>
        </div>
      </div>

      <div className="space-y-6 px-6 py-6">
        {error && (
          <div className="border-destructive/30 bg-destructive/10 text-destructive flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium">
            {error}
            <button
              onClick={() => setError(null)}
              className="text-destructive hover:text-destructive/80 ml-4"
            >
              ×
            </button>
          </div>
        )}

        {loading ? (
          <Spinner />
        ) : (
          <div className="border-border bg-card overflow-hidden rounded-xl border">
            {pages.length === 0 ? (
              <div className="text-muted-foreground py-16 text-center">
                <p className="mb-3 text-4xl">📄</p>
                <p className="text-sm">No CMS Pages found</p>
              </div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-border bg-muted/50 border-b">
                    <th className="text-muted-foreground px-4 py-3 text-left text-[11px] font-bold tracking-widest uppercase">
                      Title & Slug
                    </th>
                    <th className="text-muted-foreground px-4 py-3 text-left text-[11px] font-bold tracking-widest uppercase">
                      Type
                    </th>
                    <th className="text-muted-foreground px-4 py-3 text-left text-[11px] font-bold tracking-widest uppercase">
                      Status
                    </th>
                    <th className="text-muted-foreground px-4 py-3 text-left text-[11px] font-bold tracking-widest uppercase">
                      Last Updated
                    </th>
                    <th className="text-muted-foreground px-4 py-3 text-left text-[11px] font-bold tracking-widest uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-border divide-y">
                  {pages.map((p) => (
                    <tr
                      key={p.id}
                      className="group hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <p className="text-foreground font-medium">{p.title}</p>
                        <p className="text-muted-foreground mt-0.5 font-mono text-xs">
                          /{p.slug}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          label={p.pageType}
                          className={
                            p.pageType === "system"
                              ? "border-amber-500/20 bg-amber-500/10 text-amber-500"
                              : "border-blue-500/20 bg-blue-500/10 text-blue-500"
                          }
                        />
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleTogglePublish(p.id)}
                          className="focus:outline-none"
                        >
                          <Badge
                            label={p.status}
                            className={
                              p.status === "published"
                                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-500"
                                : "bg-muted text-muted-foreground border-border"
                            }
                          />
                        </button>
                      </td>
                      <td className="text-muted-foreground px-4 py-3 text-xs font-medium">
                        {new Date(p.updatedAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openEditModal(p)}
                            className="text-xs font-bold text-indigo-400 hover:underline"
                          >
                            Edit
                          </button>
                          {p.pageType !== "system" && (
                            <button
                              onClick={() => handleDelete(p.id, p.pageType)}
                              className="text-xs font-bold text-red-500 hover:underline"
                            >
                              Delete
                            </button>
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
        <Modal
          title={`Edit Page: ${editTarget.title}`}
          onClose={() => {
            setEditTarget(null);
            setEditSeoTarget(null);
          }}
        >
          <CmsPageForm
            initialPage={editTarget}
            initialSeo={editSeoTarget || {}}
            onSubmit={handleUpdate}
            loading={saving}
          />
        </Modal>
      )}
    </main>
  );
}
