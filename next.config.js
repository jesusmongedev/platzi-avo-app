module.exports = {
  async rewrites() {
    // Wildcards or Regular Expressions
    return [{ source: '/avocado/:patch*', destination: '/product/:patch*' }]
  },
  images: {
    domains: ['i.imgur.com'],
  },
}
