/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dynamic app routes (e.g. /cv/[lang]) export as a same-named "route.html"
  // file *and* a "route/" directory holding RSC prefetch payloads, with no
  // index.html inside. GitHub Pages resolves a directory before its sibling
  // .html file, so the bare page (e.g. /cv/en) 404s. Trailing slashes make
  // Next place index.html inside that directory instead, removing the clash.
  trailingSlash: true,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [{ loader: '@svgr/webpack', options: { icon: true } }],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
