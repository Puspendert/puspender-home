'use client';

import Image from 'next/image';
import Link from 'next/link';

type BlogUser = {
  name: string;
  username: string;
  profile_image: string;
};

type BlogCardProps = {
  article: {
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    url: string;
    cover_image: string;
    tag_list: string[];
    reading_time_minutes: number;
    user: BlogUser;
  };
};

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <Link
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden shadow-lg bg-card hover:scale-[1.02] transition-transform duration-200 no-blogcard-underline"
    >
      <div className="relative w-full h-48">
        <Image
          src={article.cover_image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-foreground">{article.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {article.tag_list.map((tag) => (
            <span
              key={tag}
              className="bg-muted text-xs px-2 py-0.5 rounded font-medium text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground">
          <span>{article.readable_publish_date}</span>
          <span>{article.reading_time_minutes} min read</span>
        </div>
      </div>
    </Link>
  );
}
