export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-6 px-6 py-16">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Web</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Next.js app in the monorepo starter—edit{" "}
          <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">src/app/page.tsx</code>{" "}
          to build here.
        </p>
      </div>
      <p className="text-sm">
        <a
          className="underline underline-offset-4 hover:opacity-80"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noreferrer"
        >
          Next.js docs
        </a>
      </p>
    </main>
  )
}
