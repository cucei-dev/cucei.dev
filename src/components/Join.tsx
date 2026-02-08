export default function Join() {
  return (
    <section className="py-32 bg-white text-black" id="join">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">
          Únete a la <br /> Revolución <span className="text-primary">Dev</span>
        </h2>
        <p className="text-xl lg:text-2xl font-light mb-16 max-w-3xl mx-auto leading-relaxed">
          No importa tu semestre. Si tienes hambre de crear código que impacte a
          miles de alumnos, este es tu lugar.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-black text-white px-6 py-4 md:px-12 md:py-6 font-black md:text-xl uppercase tracking-widest hover:bg-primary transition-colors">
            Registrarme
          </button>
          <button className="border-4 border-black text-black px-6 py-4 md:px-12 md:py-6 font-black md:text-xl uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            Ver Documentación
          </button>
        </div>
      </div>
    </section>
  );
}
