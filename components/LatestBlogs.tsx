"use client";
import React, {useEffect, useState} from 'react';
import BlogCard from "./BlogCard";

const DEV_API_URL = "https://dev.to/api/articles?username=puspendert&page=1&per_page=1";

export default function LatestBlogs() {
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [error, setError] = useState(false);

    const fetchPosts = () => {
        setLoadingPosts(true);
        setError(false);
        fetch(DEV_API_URL)
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
            <h4 className="text-muted-foreground mb-4">Latest Blog:</h4>
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
            <div className="flex justify-center mt-4">
                <a
                    href="/blogs"
                    className="px-6 py-2 rounded-lg bg-[#0a1023] text-white font-semibold shadow hover:bg-[#181c2a] transition flex items-center gap-2"
                >
                    View All Blogs
                    <svg className="ml-1" width="18" height="18" fill="none" viewBox="0 0 24 24">
                        <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};