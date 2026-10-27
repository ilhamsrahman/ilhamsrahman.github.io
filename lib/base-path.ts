// GitHub Pages can serve this site from a sub-folder
// (e.g. ilhamsrahman.github.io/israhman.github.io/). Next.js adds that prefix to
// <Link> automatically, but plain <img src="/images/..."> needs it added by hand.
export const withBase = (path: string) =>
  path.startsWith('/') ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}` : path
