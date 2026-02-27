import Image from "next/image";

interface GalleryGridProps {
    images: string[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {images.map((img, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden rounded-lg group">
                    <Image
                        src={img}
                        alt={`Galeria obraz ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                </div>
            ))}
        </div>
    );
}
