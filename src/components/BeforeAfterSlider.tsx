"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging) handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleMouseUpGlobal = () => setIsDragging(false);
        if (isDragging) {
            window.addEventListener("mouseup", handleMouseUpGlobal);
            window.addEventListener("touchend", handleMouseUpGlobal);
        }
        return () => {
            window.removeEventListener("mouseup", handleMouseUpGlobal);
            window.removeEventListener("touchend", handleMouseUpGlobal);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video overflow-hidden rounded-xl touch-none select-none cursor-ew-resize group shadow-lg"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchMove={handleTouchMove}
        >
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt="Po remoncie"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-background/80 text-foreground px-3 py-1 rounded text-sm font-semibold backdrop-blur shadow select-none">
                    Po
                </div>
            </div>
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <div className="relative w-full h-full" style={{ width: "100vw", maxWidth: "100%" }}>
                    <Image
                        src={beforeImage}
                        alt="Przed remontem"
                        fill
                        className="object-cover"
                        style={{ width: containerRef.current?.offsetWidth || "100%", height: "100%", maxWidth: "none" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                    />
                </div>
                <div className="absolute top-4 left-4 bg-background/80 text-foreground px-3 py-1 rounded text-sm font-semibold backdrop-blur shadow select-none">
                    Przed
                </div>
            </div>
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
                style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary rotate-180">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    );
}
