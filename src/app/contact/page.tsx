import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
    title: "Kontakt | Bud-Fix",
    description: "Skontaktuj się z nami w celu uzyskania bezpłatnej wyceny usług budowlanych.",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl">
                    Darmowa <span className="text-accent">Wycena</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    Jesteś zainteresowany naszymi usługami? Masz pytania? Skontaktuj się z nami, a my odpowiemy najszybciej jak to możliwe.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div className="space-y-8">
                    <div className="bg-card p-8 rounded-xl border border-muted shadow-sm space-y-8 h-full">
                        <h2 className="text-2xl font-heading font-bold">Dane kontaktowe</h2>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-accent/20 p-3 rounded-full text-accent mt-1">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Telefon</h3>
                                    <p className="text-muted-foreground mt-1">+48 123 456 789</p>
                                    <p className="text-xs text-muted-foreground mt-1">Pon - Pt: 8:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-accent/20 p-3 rounded-full text-accent mt-1">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">E-mail</h3>
                                    <a href="mailto:email@me.com" className="text-muted-foreground mt-1 hover:text-accent transition-colors block">
                                        email@me.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-accent/20 p-3 rounded-full text-accent mt-1">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Teren działania</h3>
                                    <p className="text-muted-foreground mt-1">Warszawa i okolice do 50km</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-muted">
                            <p className="text-sm text-muted-foreground italic">
                                W celu uzyskania dokładnej wyceny zalecamy przesłanie zdjęć stanu obecnego na adres e-mail oraz opisanie zakresu planowanych prac.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
