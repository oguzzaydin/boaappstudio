"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type YouTubeLiteProps = {
    videoId: string;
    title: string;
    poster: string;
    posterAlt: string;
};

export default function YouTubeLite({ videoId, title, poster, posterAlt }: YouTubeLiteProps) {
    const [active, setActive] = useState(false);

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm">
            {active ? (
                <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            ) : (
                <a
                    href={`https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`}
                    className="absolute inset-0 block focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
                    onClick={(event) => {
                        event.preventDefault();
                        setActive(true);
                    }}
                >
                    <Image
                        src={poster}
                        alt={posterAlt}
                        fill
                        sizes="(min-width: 1024px) 800px, 100vw"
                        className="object-cover"
                    />
                    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg">
                        <Play className="ml-1 h-7 w-7" aria-hidden="true" fill="currentColor" />
                    </span>
                </a>
            )}
        </div>
    );
}
