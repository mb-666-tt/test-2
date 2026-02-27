import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-muted/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
            alt="Tło budowlane"
            fill
            className="object-cover opacity-20 dark:opacity-10"
            priority
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Profesjonalne Usługi <span className="text-accent">Budowlane</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
                Specjalizujemy się w pracach wykończeniowych, glazurniczych i innych małych zadaniach budowlanych. Szybko, solidnie i z dbałością o każdy detal.
              </p>
            </div>
            <div className="space-x-4 pt-6">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Nasze realizacje
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Darmowa wycena
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="flex flex-col space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-bold">Prace Wykończeniowe</h3>
              <p className="text-muted-foreground">
                Kompleksowe wykończenia wnętrz pod klucz. Szpachlowanie, malowanie, montaż drzwi i paneli.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-bold">Usługi Glazurnicze</h3>
              <p className="text-muted-foreground">
                Układanie płytek, terakoty, gresu. Precyzyjne cięcie i fugowanie. Łazienki, kuchnie, tarasy.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-bold">Drobne Prace</h3>
              <p className="text-muted-foreground">
                Zabudowy z płyt G-K, sufity podwieszane, naprawy i poprawki po innych ekipach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-slate-900 text-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900/50 mix-blend-multiply"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Potrzebujesz fachowca?
              </h2>
              <p className="max-w-[600px] mx-auto text-slate-300 md:text-xl/relaxed">
                Skontaktuj się z nami już dziś, aby omówić szczegóły Twojego projektu i otrzymać bezpłatną wycenę.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 mt-4"
            >
              Darmowa wycena <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
