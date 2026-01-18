"use client";

import { supabase } from "@/lib/supabaseClient";

export default function AnchorCard() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="rounded-2xl bg-neutral-900 p-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium">Daily Anchor</h2>
        <button
          onClick={handleLogout}
          className="text-sm text-neutral-400"
        >
          Logout
        </button>
      </div>

      <p className="text-neutral-400 mb-4">
        Did you pause for 60 seconds today?
      </p>

      <div className="flex gap-3">
        <button className="flex-1 rounded-xl bg-neutral-800 py-2">
          Yes
        </button>
        <button className="flex-1 rounded-xl bg-neutral-800 py-2">
          No
        </button>
      </div>
    </div>
  );
}
