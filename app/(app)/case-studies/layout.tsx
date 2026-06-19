export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative mx-auto w-full max-w-4xl px-4 pt-6 pb-4 font-sans">
      {children}
    </div>
  )
}
