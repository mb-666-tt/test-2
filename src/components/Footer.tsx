import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-muted bg-background mt-auto">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="font-heading font-bold text-lg">Bud-Fix</h3>
                    <p className="text-sm text-muted-foreground opacity-80">
                        Profesjonalne usługi budowlane i wykończeniowe.
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="#" className="p-2 transition-colors hover:text-accent" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="p-2 transition-colors hover:text-accent" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="p-2 transition-colors hover:text-accent" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                </div>
            </div>
            <div className="container mx-auto px-4 py-4 text-center text-xs opacity-60 border-t border-muted">
                &copy; {new Date().getFullYear()} Bud-Fix. Wszelkie prawa zastrzeżone.
            </div>
        </footer>
    );
}
