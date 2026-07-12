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
    <section className="page-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="muted">Insights</p>
            <h2>Helpful ideas and updates from the renovation team.</h2>
          </div>
          <p>These starter posts are placeholder entries for future articles, project stories, and practical home tips.</p>
        </div>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.title} className="blog-card">
              <img src={post.image} alt={post.title} />
              <div className="card-content">
                <h3>{post.title}</h3>
                <p className="muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
