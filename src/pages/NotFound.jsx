const NotFound = () => (
  <div className="mx-auto max-w-3xl px-6 py-20 text-center">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">404</p>
    <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Page introuvable</h1>
    <p className="mt-4 text-sm text-ink/70 dark:text-white/70">
      Cette page n&apos;existe pas ou a été déplacée.
    </p>
    <a href="/" className="mt-6 inline-flex rounded-full bg-moss px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
      Retour à l&apos;accueil
    </a>
  </div>
)

export default NotFound
