const posts = [
  {
    title: 'What Makes Users Want to Share a Video on Social Media?',
    date: 'Jan 03, 2020',
    comments: '05 Comment',
    excerpt:
      'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
  },
  {
    title: 'Bumper Ads: How to Tell a Story in 6 Seconds',
    date: 'Jan 03, 2020',
    comments: '05 Comment',
    excerpt:
      'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
  },
  {
    title: 'Recruitment Marketing for the Digital Age: A Definitive Guide',
    date: 'Jan 03, 2020',
    comments: '05 Comment',
    excerpt:
      'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
  },
  {
    title: 'Say Bonjour! Ola! & Guten Tag! to Our New Team Members',
    date: 'Jan 03, 2020',
    comments: '05 Comment',
    excerpt:
      'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
  },
  {
    title: 'Pay-Per-Click Marketing: A Nuts & Bolts Guide',
    date: 'Jan 03, 2020',
    comments: '05 Comment',
    excerpt:
      'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
  },
  {
    title: 'How and When to Write a Press Release: Best Practices',
    date: 'Jan 03, 2020',
    comments: '05 Comment',
    excerpt:
      'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
  },
]

const Blog = () => (
  <div className="mx-auto max-w-6xl px-6 py-16">
    <header className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Blog</p>
      <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Our Blog</h1>
    </header>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-ink">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <div className="mt-3 text-xs uppercase tracking-[0.2em] text-ember">
            {post.date} • {post.comments}
          </div>
          <p className="mt-4 text-sm text-ink/70 dark:text-white/70">{post.excerpt}</p>
          <a href="/blog-details" className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-moss">
            Read more →
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default Blog
