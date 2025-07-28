"use client";
import {useEffect, useState} from 'react';
import BlogCard from "/components/BlogCard";

export default function LatestBlogs() {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [error, setError] = useState(false);

  const fetchPosts = () => {
    setLoadingPosts(true);
    setError(false);
    fetch("https://dev.to/api/articles?username=puspendert&page=1&per_page=3")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoadingPosts(false);
      })
      .catch(() => {
        setError(true);
        setLoadingPosts(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h4 className="text-muted-foreground mb-4">Latest Blogs:</h4>
      <div>
        {loadingPosts ? (
          <p className="text-muted-foreground text-sm">Loading...</p>
        ) : error ? (
          <div>
            <p className="text-red-500 text-sm">Failed to load posts. Please try again later.</p>
            <button
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={fetchPosts}
              disabled={loadingPosts}
            >
              Retry
            </button>
          </div>
        ) : posts.length === 0 ? (
          <p className="text-muted-foreground text-sm">No posts found.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} article={post}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};