"use client";

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
              title="Horarios"
              description="Un sistema de Horarios para monitorear todas las aulas, de todos los módulos, de todos los centros universitarios, de la Universidad de Guadalajara."
              date="03 ABR 2026"
              readTime="2 MIN READ"
              imageSrc="/images/horarios.png"
              category="Explicación"
              imageAlt="Horarios"
              href="horarios"
            />
            <BlogItem
              title="SIIAPI"
              description="La API de SIIAU, un proyecto que se ha intentado muchas veces y muy simple de hacer, solamente se necesita de un scrapper de la oferta academica y estructurar los datos. Pero podría haber problemas cuando SIIAU no esté disponible. Con nuestro proyecto evitamos todos esos problemas."
              date="18 MAR 2026"
              readTime="4 MIN READ"
              imageSrc="/images/siiau.png"
              category="Explicación"
              imageAlt="SIIAPI"
              href="siiapi"
            />
            <BlogItem
              title="CUCEI.DEV"
              description="Somos una comunidad de estudiantes apasionados por la tecnología y el desarrollo de software. Nacimos con una idea simple: crear un espacio donde los estudiantes de CUCEI podamos colaborar, aprender y construir herramientas útiles para nuestra comunidad universitaria."
              date="01 MAR 2026"
              readTime="2 MIN READ"
              category="Publicación"
              imageAlt="CUCEI.DEV"
              href="cucei-dev"
            />
          </div>
          <div className="mt-20 border-2 border-white p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                ¿Quieres publicar un artículo con nosotros?
              </h2>
              <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
                Comparte tus conocimientos con la comunidad de desarrolladores de CUCEI.
                Envíanos tu artículo y lo publicaremos en nuestro blog.
              </p>
            </div>
            <form
              className="max-w-2xl mx-auto space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const title = (form.elements.namedItem("title") as HTMLInputElement).value;
                const author = (form.elements.namedItem("author") as HTMLInputElement).value;
                const content = (form.elements.namedItem("content") as HTMLTextAreaElement).value;
                const subject = encodeURIComponent(`Nuevo artículo: ${title}`);
                const body = encodeURIComponent(
                  `Título: ${title}\n\nAutor: ${author}\n\nContenido:\n${content}`,
                );
                globalThis.location.href = `mailto:redaccion@cucei.dev?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label
                  htmlFor="title"
                  className="block font-mono text-xs uppercase tracking-widest mb-2 text-neon"
                >
                  Título
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full bg-white/5 border-2 border-white/30 px-4 py-3 text-white placeholder-white/40 focus:border-neon focus:outline-none transition-colors"
                  placeholder="Título de tu artículo"
                />
              </div>
              <div>
                <label
                  htmlFor="author"
                  className="block font-mono text-xs uppercase tracking-widest mb-2 text-neon"
                >
                  Autor
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  required
                  className="w-full bg-white/5 border-2 border-white/30 px-4 py-3 text-white placeholder-white/40 focus:border-neon focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="content"
                  className="block font-mono text-xs uppercase tracking-widest mb-2 text-neon"
                >
                  Contenido
                </label>
                <textarea
                  id="content"
                  name="content"
                  required
                  rows={6}
                  className="w-full bg-white/5 border-2 border-white/30 px-4 py-3 text-white placeholder-white/40 focus:border-neon focus:outline-none transition-colors resize-none"
                  placeholder="Escribe el contenido de tu artículo...  # Puedes usar Markdown para formato!"
                />
              </div>
              <button
                type="submit"
                className="w-full border-2 border-white text-white px-12 py-4 font-black text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
