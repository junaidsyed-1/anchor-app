export default function AnchorCard() {
  return (
    <div className="rounded-2xl bg-neutral-900 p-6">
      <h2 className="text-lg font-medium mb-2">
        Daily Anchor
      </h2>
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
