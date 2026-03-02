import BlogItem from "@/components/blog/Item";

export default function Blog() {
  return (
    <>
      <header className="pt-32 pb-16 grid-pattern border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="inline-block px-4 py-1 border-2 border-neon text-neon font-mono text-xs mb-4 uppercase tracking-[0.2em] font-bold">
                BLOG // ARTÍCULOS Y TUTORIALES
              </div>
              <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Blog <span className="text-primary">Feed</span>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <main className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <BlogItem
              title="CUCEI.DEV"
              description="Somos una comunidad de estudiantes apasionados por la tecnología y el desarrollo de software. Nacimos con una idea simple: crear un espacio donde los estudiantes de CUCEI podamos colaborar, aprender y construir herramientas útiles para nuestra comunidad universitaria."
              date="01 MAR 2026"
              readTime="1 MIN READ"
              category="Publicación"
              imageAlt="CUCEI.DEV"
              href="cucei-dev"
            />
          </div>
          <div className="mt-20 flex justify-center">
            <button className="border-2 border-white text-white px-12 py-5 font-black text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Cargar más artículos
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
