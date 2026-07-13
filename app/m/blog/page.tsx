export default function BlogPage() {
  const posts = [
    {
      title: "How to Plan a Kitchen Refresh Without Starting Over",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Bathroom Upgrades That Add Everyday Comfort",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "What to Know Before Selling a Home in Today’s Market",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#64748b]">Insights</p>
            <h2 className="text-3xl font-semibold text-[#1f2933]">Helpful ideas and updates from the renovation team.</h2>
          </div>
          <p className="max-w-xl text-[#64748b]">These starter posts are placeholder entries for future articles, project stories, and practical home tips.</p>
        </div>

        <div className="grid gap-4">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[1rem] border border-[#e6dccf] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <img src={post.image} alt={post.title} className="mb-4 h-52 w-full rounded-[0.9rem] object-cover" />
              <div>
                <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                <p className="text-[#64748b]">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
