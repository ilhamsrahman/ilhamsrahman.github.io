// Set by the GitHub Pages workflow ("" locally, "/repo-name" for a project site)
const basePath = process.env.PAGES_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build a static site into ./out (what GitHub Pages serves)
  output: 'export',
  // GitHub Pages has no image-optimisation server
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

module.exports = nextConfig
