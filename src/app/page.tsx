"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard on app load
    router.replace("/dashboard");
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center transition-colors">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
          Loading Baseer TMS
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Redirecting to dashboard...
        </p>
      </div>
    </div>
  );
}
