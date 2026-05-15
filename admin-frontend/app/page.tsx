import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 p-6 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl w-full text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <h1 className="text-6xl sm:text-7xl font-black tracking-tighter text-gray-900 dark:text-white drop-shadow-sm">
            Admin <span className="text-primary drop-shadow-md">Portal</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Manage your entire platform with elegance and speed.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center pt-4">
          <Link href="/login" passHref>
            <Button 
              size="lg" 
              className="rounded-full px-10 py-8 text-xl font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground border-0"
            >
              Go to Login Page
            </Button>
          </Link>
        </div>

        <div className="pt-20">
          <div className="relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200 dark:border-gray-800" />
            </div>
            <div className="relative bg-gray-50 dark:bg-gray-950 px-4">
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                Built by two devs
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-xl font-bold text-gray-800 dark:text-gray-100">
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary-foreground dark:text-primary flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <span className="text-xl">D</span>
              </div>
              <span className="group-hover:text-primary transition-colors duration-300">Dev</span>
            </div>

            <span className="text-gray-300 dark:text-gray-700 font-light">&amp;</span>

            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary-foreground dark:text-primary flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <span className="text-xl">Z</span>
              </div>
              <span className="group-hover:text-primary transition-colors duration-300">Zish</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
