const BlogDetails = () => (
  <div>
    <section className="relative overflow-hidden bg-ink py-20 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/main/img/blog/blog-hero.jpg')" }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-3xl font-semibold md:text-4xl">
          What Makes Users Want to Share a Video on Social Media?
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ember">
          by Krista Starkes • Jan 03, 2020 • 05 Comment
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="space-y-6 text-sm text-ink/70 dark:text-white/70">
        <p>
          Videos with a wow factor are always more shareable than those without it. The wow factor is hard to define,
          but it generally refers to any content that makes viewers think, “Wow!”
        </p>
        <p>
          That’s the kind of catchy content that makes people want to share it with their friends. With a little
          clever marketing, you can put that wow factor to work for your business’ videos.
        </p>
        <div className="rounded-3xl border border-ember/40 bg-mist p-6 text-ink dark:border-white/10 dark:bg-white/10 dark:text-white">
          <p className="text-sm">
            Create horizontal, square and vertical videos that are ready to be exported to your Instagram video stories
            and posts. Perfect for any social network!
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-ember">Max Desmarais</p>
        </div>
        <p>
          An average Internet user watches about 1.5 hours of online video every day. This means that video can be a
          powerful marketing tool for getting your message before the eyes of millions of people.
        </p>
      </div>
    </section>
  </div>
)

export default BlogDetails
