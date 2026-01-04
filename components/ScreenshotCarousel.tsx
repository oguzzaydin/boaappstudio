"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";

interface ScreenshotCarouselProps {
    screenshots: string[];
    appName: string;
}

export default function ScreenshotCarousel({ screenshots, appName }: ScreenshotCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth * 0.8;
            const newScrollLeft = direction === "left"
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: newScrollLeft,
                behavior: "smooth"
            });
        }
    };

    if (!screenshots || screenshots.length === 0) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-[9/19] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-sm relative group flex items-center justify-center">
                        <div className="text-center p-4">
                            <Smartphone className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                            <span className="text-slate-400 text-sm font-medium">No Screenshot</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Grid Layout for 3 or fewer images
    if (screenshots.length <= 3) {
        return (
            <div className={`grid grid-cols-1 sm:grid-cols-${screenshots.length} gap-6 max-w-5xl`}>
                {screenshots.map((src, index) => (
                    <div key={index} className="aspect-[9/19] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-sm relative group">
                        <Image
                            src={src}
                            alt={`${appName} screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        );
    }

    // Carousel Layout for > 3 images
    return (
        <div className="relative group/carousel">
            {/* Left Scroll Button */}
            {showLeftArrow && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 shadow-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
            )}

            {/* Scroll Container */}
            <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide w-full"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {screenshots.map((src, index) => (
                    <div
                        key={index}
                        className="snap-center shrink-0 w-[200px] sm:w-[260px] md:w-[280px] aspect-[9/19] overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-sm relative"
                    >
                        <Image
                            src={src}
                            alt={`${appName} screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Right Scroll Button */}
            {showRightArrow && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 shadow-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            )}
        </div>
    );
}
