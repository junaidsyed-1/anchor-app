"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

import AnchorCard from "@/components/AnchorCard";
import DailyTaskCard from "@/components/DailyTaskCard";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    });
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-8">
      <h1 className="text-2xl font-semibold mb-6">Today</h1>

      <div className="space-y-6">
        <AnchorCard />
        <DailyTaskCard />
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800">
        <div className="flex justify-around py-3 text-neutral-400">
          <span>Today</span>
          <span>Calendar</span>
          <span>Rules</span>
        </div>
      </nav>
    </main>
  );
}
