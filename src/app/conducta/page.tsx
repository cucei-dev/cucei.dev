export default function Conducta() {
  return (
    <main className="pt-40 pb-32 grid-pattern min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-20">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-2 h-20 bg-primary"></div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
              CÓDIGO DE
              <br />
              CONDUCTA
            </h1>
          </div>
          <p className="text-xs font-mono text-neon tracking-[0.3em] md:text-sm uppercase">
            Versión 1.0.0 // Comunidad de Desarrolladores
          </p>
        </header>
        <div className="space-y-16">
          <section className="border-t-2 border-white pt-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
              <span className="text-primary">01.</span> Nuestro Compromiso
            </h2>
            <div className="md:text-xl font-light leading-relaxed space-y-6">
              <p>
                En <span className="text-neon font-bold">cucei.dev</span>,
                nos comprometemos a proporcionar una experiencia libre de acoso
                para todos, independientemente de su nivel de experiencia,
                género, identidad y expresión de género, orientación sexual,
                discapacidad, apariencia personal, tamaño corporal, raza, etnia,
                edad, religión o nacionalidad.
              </p>
              <p>
                No toleramos el acoso de los participantes de la comunidad en
                ninguna de sus formas. El lenguaje y las imágenes sexuales no
                son apropiados para ningún espacio de la comunidad, incluyendo
                chats, repositorios de código y eventos.
              </p>
            </div>
          </section>
          <section className="border-t-2 border-white pt-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
              <span className="text-primary">02.</span> Comportamiento Esperado
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:text-lg font-light">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-neon">
                    check_circle
                  </span>
                  <p>Ser profesional y empático con los demás miembros.</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-neon">
                    check_circle
                  </span>
                  <p>Utilizar un lenguaje acogedor e inclusivo.</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-neon">
                    check_circle
                  </span>
                  <p>Respetar los diferentes puntos de vista y experiencias.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-neon">
                    check_circle
                  </span>
                  <p>Aceptar constructivamente las críticas.</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-neon">
                    check_circle
                  </span>
                  <p>Centrarse en lo que es mejor para la comunidad.</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-neon">
                    check_circle
                  </span>
                  <p>Mostrar respeto hacia otros miembros de la comunidad.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t-2 border-white pt-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
              <span className="text-primary">03.</span> Reporte de Incidentes
            </h2>
            <div className="md:text-xl font-light leading-relaxed space-y-6">
              <p>
                Si eres víctima de acoso, notas que alguien más lo está siendo,
                o tienes cualquier otra preocupación, por favor contacta a los
                administradores de la comunidad inmediatamente.
              </p>
              <div className="bg-primary/5 border-2 border-neon p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-black md:text-2xl uppercase tracking-tighter mb-2">
                    Canal Oficial de Reporte
                  </h4>
                  <p className="font-mono text-sm uppercase opacity-70">
                    Atención confidencial y rápida
                  </p>
                </div>
                <a
                  className="text-2xl md:text-3xl font-black text-neon hover:text-white transition-colors underline decoration-2 underline-offset-8"
                  href="mailto:conducta@cucei.dev"
                >
                  conducta@cucei.dev
                </a>
              </div>
              <p className="text-base italic opacity-60">
                * Todas las quejas serán revisadas e investigadas y darán lugar
                a una respuesta que se considere necesaria y apropiada a las
                circunstancias.
              </p>
            </div>
          </section>
          <section className="border-t-2 border-white pt-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
              <span className="text-primary">04.</span> Consecuencias
            </h2>
            <div className="md:text-xl font-light leading-relaxed">
              <p>
                El incumplimiento de estas normas puede resultar en la expulsión
                temporal o permanente de la comunidad{" "}
                <span className="text-neon font-bold">cucei.dev</span>, así
                como la prohibición de participar en futuros proyectos y eventos
                organizados por el grupo.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
