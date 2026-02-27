"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate submission for static site
        setTimeout(() => {
            setStatus("success");
            // Reset form
            const target = e.target as HTMLFormElement;
            target.reset();
            setTimeout(() => setStatus("idle"), 3000);
        }, 1000);
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-card rounded-xl shadow-sm border border-muted">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">Napisz do nas</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Imię i nazwisko
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Jan Kowalski"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Adres e-mail
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="email@me.com"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Wiadomość
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                        placeholder="W czym możemy pomóc?"
                    />
                </div>
                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-10 px-4 py-2 mt-4"
                >
                    {status === "submitting" ? (
                        "Wysyłanie..."
                    ) : status === "success" ? (
                        "Wysłano!"
                    ) : (
                        <>
                            Wyślij wiadomość
                            <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
