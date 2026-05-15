/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Loader2,  } from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/axios";

interface BlogFormData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
}

interface BlogFormProps {
  initialData?: Partial<BlogFormData>;
  blogId?: string;
  mode: "create" | "edit";
}

export function BlogForm({ initialData, blogId, mode }: BlogFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<BlogFormData>({
    title: initialData?.title ?? "",
    slug: initialData?.slug ?? "",
    content: initialData?.content ?? "",
    excerpt: initialData?.excerpt ?? "",
    coverImage: initialData?.coverImage ?? "",
    status: initialData?.status ?? "DRAFT",
  });

  const handleChange = (field: keyof BlogFormData, value: string) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "title" && mode === "create") {
        updated.slug = value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      }
      return updated;
    });
  };



  const handleSubmit = async () => {
    if (!form.title || !form.content) {
      toast.error("Title and content are required");
      return;
    }

    setLoading(true);
    try {
      if (mode === "create") {
        await api.post("/blogs", form);
      } else {
        await api.patch(`/blogs/${blogId}`, form);
      }

      toast.success(mode === "create" ? "Blog created!" : "Blog updated!");
      router.push("/dashboard/blogs");
      router.refresh();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message =
        err?.response?.data?.message ?? "Failed to save blog";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <Label className="text-foreground font-medium">Title *</Label>
        <Input
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Enter blog title..."
          className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
      </div>

      {/* Slug */}
      <div className="space-y-2">
        <Label className="text-foreground font-medium">Slug</Label>
        <Input
          value={form.slug}
          onChange={(e) => handleChange("slug", e.target.value)}
          placeholder="auto-generated-from-title"
          className="bg-muted border-border text-foreground placeholder:text-muted-foreground font-mono text-sm focus-visible:ring-primary"
        />
      </div>

      {/* Excerpt */}
      <div className="space-y-2">
        <Label className="text-foreground font-medium">Excerpt</Label>
        <Textarea
          value={form.excerpt}
          onChange={(e) => handleChange("excerpt", e.target.value)}
          placeholder="Short description shown in listing..."
          rows={2}
          className="bg-muted border-border text-foreground placeholder:text-muted-foreground resize-none focus-visible:ring-primary"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <Label className="text-foreground font-medium">Content *</Label>
        <Textarea
          value={form.content}
          onChange={(e) => handleChange("content", e.target.value)}
          placeholder="Write your blog content here... (Markdown supported)"
          rows={14}
          className="bg-muted border-border text-foreground placeholder:text-muted-foreground resize-none font-mono text-sm focus-visible:ring-primary"
        />
      </div>

      {/* Cover Image */}
      <div className="space-y-2">
        <Label className="text-foreground font-medium">Cover Image URL</Label>
        <Input
          value={form.coverImage}
          onChange={(e) => handleChange("coverImage", e.target.value)}
          placeholder="https://..."
          className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
        {form.coverImage && (
          <img
            src={form.coverImage}
            alt="cover preview"
            className="mt-2 rounded-lg max-h-40 object-cover w-full border border-border"
          />
        )}
      </div>

    

      {/* Status */}
      <div className="space-y-2">
        <Label className="text-foreground font-medium">Status</Label>
        <Select value={form.status} onValueChange={(v) => handleChange("status", v)}>
          <SelectTrigger className="w-48 bg-muted border-border text-foreground focus:ring-primary">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-card border-border text-foreground">
            <SelectItem value="DRAFT">Draft</SelectItem>
            <SelectItem value="PUBLISHED">Published</SelectItem>
            <SelectItem value="ARCHIVED">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-4 border-t border-border mt-4">
        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-medium shadow-[0_0_10px_rgba(245,197,24,0.15)]"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {mode === "create" ? "Create Blog" : "Save Changes"}
        </Button>
        <Button
          variant="ghost"
          onClick={() => router.push("/dashboard/blogs")}
          className="text-muted-foreground hover:text-foreground hover:bg-muted font-medium border border-transparent"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}