"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo.png"
                        alt="Logo firmy"
                        width={120}
                        height={40}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/about" className="transition-colors hover:text-accent">
                        O mnie
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
