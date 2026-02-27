"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Hammer } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Hammer className="h-6 w-6 text-accent" />
                    <span className="font-heading font-bold text-xl hidden sm:inline-block">
                        Bud-Fix
                    </span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/about" className="transition-colors hover:text-accent">
                        O nas
                    </Link>
                    <Link href="/projects" className="transition-colors hover:text-accent">
                        Realizacje
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-accent">
                        Kontakt
                    </Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
