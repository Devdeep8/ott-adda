import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { BlogForm } from "../_components/blog-form";

export default function CreateBlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/dashboard/blogs"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary text-sm mb-4 transition-colors font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <h1 className="text-3xl font-heading font-bold tracking-tight text-foreground">Create Blog</h1>
          <p className="text-muted-foreground mt-1 text-sm">Write and publish a new blog post</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 shadow-xl">
          <BlogForm mode="create" />
        </div>
      </div>
    </div>
  );
}