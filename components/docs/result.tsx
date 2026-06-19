export function Result({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg bg-card p-4">
      <h3 className="mb-4 text-xl font-semibold">Results</h3>
      {children}
    </div>
  )
}
