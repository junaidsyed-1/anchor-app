export default function DailyTaskCard() {
  return (
    <div className="rounded-2xl bg-neutral-900 p-6">
      <h2 className="text-lg font-medium mb-2">
        One Daily Task
      </h2>

      <input
        placeholder="Enter one task for today"
        className="w-full rounded-xl bg-neutral-800 px-4 py-2 text-neutral-100 placeholder-neutral-500 outline-none"
      />
    </div>
  );
}
