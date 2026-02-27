import Image from "next/image";

export const metadata = {
    title: "O Mnie | Bud-Fix",
    description: "Dowiedz się więcej o mojej działalności i doświadczeniu budowlanym.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl">
                        Od lat budujemy z <span className="text-accent">pasją</span>
                    </h1>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            Prowadzę jednoosobową firmą budowlaną, która zrodziła się z zamiłowania do precyzji i solidnego wykonania. Przez lata zdobywałem doświadczenie przy różnorodnych projektach, od drobnych napraw po generalne remonty mieszkań i domów.
                        </p>
                        <p>
                            Moim priorytetem jest nie tylko zadowolenie klienta, ale również trwałość i estetyka wykonywanych prac. Specjalizuję się w pracach wykończeniowych, takich jak układanie glazury i gresu, malowanie, szpachlowanie oraz zabudowy z płyt kartonowo-gipsowych.
                        </p>
                        <p>
                            Jako jednoosobowy wykonawca gwarantuję bezpośredni kontakt, pełne zaangażowanie w Twój projekt oraz terminowość, co w dzisiejszych czasach na rynku budowlanym jest wartością samą w sobie.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-muted">
                        <div>
                            <p className="text-4xl font-heading font-bold text-accent">10+</p>
                            <p className="text-sm text-muted-foreground mt-2">Lat doświadczenia</p>
                        </div>
                        <div>
                            <p className="text-4xl font-heading font-bold text-accent">150+</p>
                            <p className="text-sm text-muted-foreground mt-2">Zrealizowanych projektów</p>
                        </div>
                    </div>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl">
                    <Image
                        src="https://images.unsplash.com/photo-1541888081622-154b73b5220c?w=800&q=80"
                        alt="Właściciel firmy przy pracy"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </div>
    );
}
