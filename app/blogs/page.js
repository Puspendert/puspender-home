'use client';
import {useEffect, useState} from 'react';
import BlogCard from '/components/BlogCard';
import SEO from "/components/SEO";

const PAGE_SIZE = 3;

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPosts()
  }, [page]);

  const handleLoadMore = () => {
    if (!loading && hasMore) setPage((p) => p + 1);
  };

  const fetchPosts = () => {
    setLoading(true);
    setError(false);
    fetch(`https://dev.to/api/articles?username=puspendert&page=${page}&per_page=${PAGE_SIZE}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length < PAGE_SIZE) setHasMore(false);
        setPosts((prev) => [...prev, ...data]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }

  return (
    <>
      <SEO title="Puspender Tanwar - Resume"
           description="Puspender - Full Stack Development Engineer | Curious | Listener | Learner | Leader | Problem Solver"/>
      <div>
        <section
          id="blogs"
          className="min-h-screen scroll-my-1 flex pt-10 pl-20 pr-20 mb-10">
          <div className="w-full flex flex-col flex-1 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Blogs</h1>
            <div className="flex flex-col gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} article={post}/>
              ))}
            </div>
            {error && (
              <div className="mt-4">
                <p className="text-red-500 text-sm">
                  Failed to load posts. Please try again later.
                </p>
                <button
                  onClick={fetchPosts}
                  className="mt-2 px-4 py-2 rounded bg-card text-foreground border border-border hover:bg-muted transition"
                >
                  Retry
                </button>
              </div>
            )}
            {loading && (
              <p className="text-muted-foreground text-sm mt-4">Loading...</p>
            )}
            {!loading && !error && hasMore && (
              <button
                onClick={handleLoadMore}
                className="mt-6 px-4 py-2 rounded bg-card text-foreground border border-border hover:bg-muted transition"
              >
                Load More
              </button>
            )}
            {!hasMore && posts.length > 0 && (
              <p className="text-muted-foreground text-sm mt-8 text-center">No more posts</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;