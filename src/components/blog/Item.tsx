"use client";

import Image from "next/image";
import Link from "next/link";

type BlogItemProps = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageSrc?: string;
  category: string;
  imageAlt: string;
  author?: string;
  href: string;
};

export default function BlogItem({
  title,
  description,
  date,
  readTime,
  imageSrc = "/images/cucei.dev.png",
  category,
  imageAlt,
  author = "Redacción CUCEI.DEV",
  href,
}: Readonly<BlogItemProps>) {
  return (
    <article
      className="border-2 border-white group flex flex-col h-full hover:border-neon transition-colors"
      onClick={() => (window.location.href = `/blog/${href}`)}
    >
      <div className="aspect-video relative overflow-hidden bg-white/5">
        <Image
          alt={imageAlt}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          src={imageSrc}
          width={512}
          height={512}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest">
            {category}
          </span>
        </div>
      </div>
      <div className="p-8 grow flex flex-col">
        <div className="flex items-center gap-4 mb-4 text-xs font-mono text-white/50 uppercase tracking-widest">
          <span>{date}</span>
          <span className="w-1 h-1 bg-primary"></span>
          <span>{readTime}</span>
        </div>
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter leading-none group-hover:text-neon transition-colors">
          {title}
        </h2>
        <p className="text-white/70 text-base leading-relaxed mb-8 grow">
          {description}
        </p>
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-neon uppercase">
            Por: {author}
          </span>
          <Link
            className="material-symbols-outlined text-white hover:text-neon transition-colors"
            href={`/blog/${href}`}
          >
            arrow_forward
          </Link>
        </div>
      </div>
    </article>
  );
}
