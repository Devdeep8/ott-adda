import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { BlogForm } from "../../_components/blog-form";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

async function getBlog(id: string) {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await fetch(
      `${process.env.INTERNAL_API_URL}/blogs/${id}`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieHeader,
        },
      }
    );

    if (!res.ok) return null;

    const json = await res.json();
    // shape: { success: true, data: { ... } }
    return json.data.data ?? json.result ?? json;
  } catch {
    return null;
  }
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/dashboard/blogs"
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-white text-sm mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-white">Edit Blog</h1>
          <p className="text-zinc-400 mt-1 text-sm">
            Editing:{" "}
            <span className="text-zinc-300 font-medium">{blog.title}</span>
          </p>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <BlogForm
            mode="edit"
            blogId={blog.id}
            initialData={{
              title: blog.title,
              slug: blog.slug,
              content: blog.content,
              excerpt: blog.excerpt,
              coverImage: blog.coverImage,
              status: blog.status,
            }}
          />
        </div>
      </div>
    </div>
  );
}