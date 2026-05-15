/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2, Plus, Eye, Loader2 } from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/axios";

type BlogStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

interface Blog {
  id: string;
  title: string;
  slug: string;
  status: BlogStatus;
  author: { name: string };
  tags: string[];
  publishedAt: string | null;
  createdAt: string;
}

const STATUS_COLORS: Record<BlogStatus, string> = {
  PUBLISHED: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  DRAFT: "bg-primary/10 text-primary border-primary/20",
  ARCHIVED: "bg-muted text-muted-foreground border-border",
};

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const params: Record<string, string> = {};
      if (statusFilter !== "ALL") params.status = statusFilter;

      const res = await api.get("/blogs", { params });
      setBlogs(res.data.data.blogs);
    } catch {
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [ ]);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      await api.delete(`/blogs/${id}`);
      toast.success("Blog deleted");
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch {
      toast.error("Failed to delete blog");
    } finally {
      setDeletingId(null);
    }
  };

 

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold tracking-tight text-foreground">Blogs</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage all blog posts from here</p>
        </div>
        <Link href="/dashboard/blogs/create">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-medium">
            <Plus className="w-4 h-4" /> New Blog
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <Input
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs bg-muted border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40 bg-muted border-border text-foreground focus:ring-primary">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border text-foreground">
            <SelectItem value="ALL">All</SelectItem>
            <SelectItem value="PUBLISHED">Published</SelectItem>
            <SelectItem value="DRAFT">Draft</SelectItem>
            <SelectItem value="ARCHIVED">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground font-medium">Title</TableHead>
              <TableHead className="text-muted-foreground font-medium">Author</TableHead>
              <TableHead className="text-muted-foreground font-medium">Status</TableHead>
              <TableHead className="text-muted-foreground font-medium">Published</TableHead>
              <TableHead className="text-muted-foreground font-medium text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-16">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto text-zinc-500" />
                </TableCell>
              </TableRow>
            ) : blogs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-16 text-zinc-500">
                  No blogs found
                </TableCell>
              </TableRow>
            ) : (
              blogs.map((blog) => (
                <TableRow
                  key={blog.id}
                  className="border-border hover:bg-muted/50 transition-colors"
                >
                  <TableCell className="font-medium text-foreground max-w-xs truncate">
                    {blog.title}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {blog.author?.name ?? "—"}
                  </TableCell>
                  <TableCell>
                    <span className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border ${STATUS_COLORS[blog.status]}`}>
                      {blog.status}
                    </span>
                  </TableCell>
                 
                  <TableCell className="text-muted-foreground text-sm">
                    {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : "—"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/dashboard/blogs/${blog.id}/edit`}>
                        <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted w-8 h-8">
                          <Pencil className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                      <Link href={`/blogs/${blog.slug}`} target="_blank">
                        <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted w-8 h-8">
                          <Eye className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 w-8 h-8">
                            {deletingId === blog.id
                              ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              : <Trash2 className="w-3.5 h-3.5" />
                            }
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-card border-border text-foreground">
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Blog?</AlertDialogTitle>
                            <AlertDialogDescription className="text-muted-foreground">
                              This will permanently delete &quot;{blog.title}&quot;. This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="bg-muted border-border text-foreground hover:bg-muted/80">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(blog.id)}
                              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}