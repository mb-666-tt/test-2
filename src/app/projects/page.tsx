import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata = {
    title: "Realizacje | Bud-Fix",
    description: "Zbiór naszych najnowszych realizacji budowlanych i wykończeniowych.",
};

const projects = [
    {
        id: 1,
        title: "Kompleksowe wykończenie łazienki",
        description: "Projekt obejmował demontaż starej glazury, wyrównanie ścian, nową hydroizolację, układanie dużego formatu gresu na ścianach i podłodze, oraz montaż armatury.",
        beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80",
        afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80",
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
            "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80",
        ]
    },
    {
        id: 2,
        title: "Remont salonu z zabudową G-K",
        description: "Wykonanie sufitu podwieszanego z ukrytym oświetleniem LED, gładzie szpachlowe na całych powierzchniach i ułożenie paneli winylowych.",
        beforeImage: "https://images.unsplash.com/photo-1513694203202-7fbddfc26abf?w=1600&q=80",
        afterImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
            "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&q=80",
        ]
    },
    {
        id: 3,
        title: "Metamorfoza kuchni",
        description: "Przygotowanie pomieszczenia pod nową zabudowę, zmiana przyłączy elektrycznych i wod-kan, ułożenie fartucha z płytek nad blatem roboczym.",
        beforeImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&q=80",
        afterImage: "https://images.unsplash.com/photo-1556910103-1c02745a872f?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
            "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
        ]
    }
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <div className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl">
                    Wybrane <span className="text-accent">Realizacje</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    Zobacz nasze ostatnie prace budowlane i wykończeniowe. Przekonaj się o jakości, przeglądając efekty przed i po zakończeniu remontu.
                </p>
            </div>

            <div className="space-y-24">
                {projects.map((project) => (
                    <div key={project.id} className="space-y-8 pb-12 border-b border-muted">
                        <div className="space-y-4 max-w-3xl">
                            <h2 className="text-3xl font-heading font-bold">{project.title}</h2>
                            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>

                        <div className="w-full">
                            <BeforeAfterSlider
                                beforeImage={project.beforeImage}
                                afterImage={project.afterImage}
                            />
                        </div>

                        <div className="pt-4">
                            <h3 className="text-xl font-heading font-semibold mb-2">Galeria</h3>
                            <GalleryGrid images={project.gallery} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
