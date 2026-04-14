const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH

const basePath =
  rawBasePath && rawBasePath !== "/"
    ? rawBasePath.replace(/\/$/, "")
    : ""

export function withBasePath(path: string) {
  if (!path) return path

  // External / special schemes should be passed through as-is.
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path
  }

  if (!basePath) return path

  // Avoid double-prefixing.
  if (path === basePath || path.startsWith(`${basePath}/`)) return path

  if (path.startsWith("/")) return `${basePath}${path}`

  return `${basePath}/${path}`
}
