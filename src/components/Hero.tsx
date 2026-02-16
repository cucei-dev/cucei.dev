export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 grid-pattern">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1 border-2 border-neon text-neon font-mono text-xs mb-8 uppercase tracking-[0.2em] font-bold mt-3">
            ESTADO: ACTIVO // BUILD 1.0.0
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
            Impulsando el <br />
            <span className="text-primary">futuro tech</span> <br />
            de CUCEI
          </h1>
          <p className="md:text-xl text-white font-light mb-12 max-w-2xl leading-relaxed">
            La comunidad de desarrolladores de la Universidad de Guadalajara.
            Construimos software abierto, compartimos conocimiento y
            transformamos ideas en realidad.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              className="bg-primary text-white px-10 py-5 font-black lg:text-lg uppercase tracking-tight hover:bg-white hover:text-primary transition-colors"
              href="#projects"
            >
              Explorar Herramientas
            </a>
            <a
              className="border-2 border-white text-white px-10 py-5 font-black lg:text-lg uppercase tracking-tight hover:bg-white hover:text-black transition-colors"
              href="#"
            >
              Discord Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
