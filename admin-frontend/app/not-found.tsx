import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";

export default async function NotFound() {
  const headersList = await headers();
  const pathname =
    headersList.get("x-invoke-path") ||
    headersList.get("referer")?.replace(/^https?:\/\/[^/]+/, "") ||
    "/unknown";

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4 p-8">
        <Construction className="mx-auto h-12 w-12 text-muted-foreground" />
        <h1 className="text-4xl font-bold">Under Construction</h1>
        <p className="text-muted-foreground text-sm">
          The page{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-foreground text-xs">
            {pathname}
          </code>{" "}
          is currently being built.
        </p>
        <Button asChild variant="outline">
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Link>
        </Button>
      </div>
    </main>
  );
}