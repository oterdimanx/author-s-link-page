import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <main className="max-w-3xl w-full">
        {/* Main content container with sharp border */}
        <div className="border-2 border-foreground p-12 md:p-16">
          {/* Writer's name */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
            Michèle Terdiman
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide">
            Autrice & Ecrivain (au choix)
          </p>

          {/* Decorative line */}
          <div className="w-20 h-0.5 bg-accent mb-10"></div>

          {/* Brief bio */}
          <p className="text-base md:text-lg text-foreground/80 mb-12 leading-relaxed max-w-2xl">
            Exploring the intersection of technology, humanity, and imagination. 
            Writing essays, stories, and reflections on life in the digital age.
          </p>

          {/* CTA to blog */}
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-base font-medium tracking-wide"
          >
            <a href="https://plumeetregard.art/" target="_blank" rel="noopener noreferrer">
              Accéder à mon blog →
            </a>
          </Button>
        </div>

        {/* Footer note */}
        <p className="text-sm text-muted-foreground mt-8 text-center">
          © 2025 Michèle Terdiman. Tous droits réservés.
        </p>
      </main>
    </div>
  );
};

export default Index;
