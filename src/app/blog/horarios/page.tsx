"use client";

import Image from "next/image";
import Content from "@/posts/horarios.mdx";

export default function Post() {
  return (
    <main className="pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-6">
        <header className="mb-12">
          <div className="inline-block px-3 py-1 border-2 border-neon text-neon font-mono text-xs mb-6 uppercase tracking-widest font-bold">
            Explicación
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tighter uppercase">
            Horarios
          </h1>
          <div className="flex items-center gap-4">
            <Image
              alt="Author Avatar"
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
              src="/images/cucei.dev.png"
              width={512}
              height={512}
            />
            <div>
              <div className="font-bold text-lg uppercase tracking-tight">
                Redacción CUCEI.DEV
              </div>
              <div className="font-mono text-xs text-white/60 uppercase tracking-widest">
                Abril 03, 2026 • 2 min lectura
              </div>
            </div>
          </div>
        </header>
        <div className="prose-custom">
          <Content />
          <section className="mt-20 pt-10 border-t-2 border-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="font-mono text-sm uppercase tracking-[0.3em] font-bold">
                Compartir Conocimiento:
              </div>
              <div className="flex gap-4">
                <button
                  className="border-2 border-white px-6 py-2 hover:bg-white hover:text-black transition-all font-bold uppercase text-xs tracking-widest"
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?text=${encodeURIComponent("¡Acabo de leer este increíble artículo en CUCEI.DEV! 🚀 #CUCEIDev")}`,
                      "_blank",
                    )
                  }
                >
                  Twitter
                </button>
                <button
                  className="border-2 border-white px-6 py-2 hover:bg-white hover:text-black transition-all font-bold uppercase text-xs tracking-widest"
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(globalThis.location.href)}&title=${encodeURIComponent("¡Acabo de leer este increíble artículo en CUCEI.DEV! 🚀 #CUCEIDev")}`,
                      "_blank",
                    )
                  }
                >
                  LinkedIn
                </button>
                <button
                  className="border-2 border-white px-6 py-2 hover:bg-white hover:text-black transition-all font-bold uppercase text-xs tracking-widest"
                  onClick={() =>
                    navigator.clipboard.writeText(globalThis.location.href)
                  }
                >
                  Copy Link
                </button>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
