export default function Dev() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div>
            <div className="inline-block px-4 py-1 border-2 border-neon text-neon font-mono text-xs mb-8 uppercase tracking-[0.2em] font-bold">
              SERVICIO: SUBDOMINIOS // CLOUD-01
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter uppercase">
              Obtén tu <br />
              <span className="text-primary">Subdominio .dev</span>
            </h1>
            <p className="md:text-xl text-white font-light leading-relaxed max-w-lg">
              Despliega tu proyecto con una identidad profesional dentro del
              ecosistema tecnológico de la Universidad de Guadalajara.
            </p>
          </div>
          <div className="border-l-4 border-white pl-8 space-y-8">
            <div>
              <h3 className="font-mono text-neon font-bold uppercase tracking-widest mb-4">
                Requisitos del Sistema
              </h3>
              <ul className="space-y-4 font-light text-white/80">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-neon text-xl">
                    check_circle
                  </span>
                  <span>
                    Ser estudiante activo de cualquier carrera de la Universidad
                    de Guadalajara.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-neon text-xl">
                    check_circle
                  </span>
                  <span>
                    El código debe estar alojado en un repositorio público (Open
                    Source).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-neon text-xl">
                    check_circle
                  </span>
                  <span>
                    Si el repositorio es privado, deberá incluir una descripción
                    detallada del proyecto, su propósito y funcionalidad.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-neon text-xl">
                    check_circle
                  </span>
                  <span>
                    Proyecto alineado con los términos de convivencia de la
                    comunidad.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-6 border-2 border-neon/30 bg-black">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-neon text-3xl">
                  info
                </span>
                <h4 className="font-bold uppercase tracking-tight">
                  Asignación Directa
                </h4>
              </div>
              <p className="text-sm font-mono text-white/60">
                Los subdominios son gratuitos y se mantienen activos mientras el
                proyecto reciba mantenimiento o sea de utilidad para la
                comunidad.
              </p>
              <br />
              <p className="text-sm font-mono text-white/60">
                Si el subdominio es para uso personal o para un proyecto
                escolar, no necesariamente alineado a cucei.dev, deberá
                renovarse cada semestre.
              </p>
            </div>
          </div>
        </div>
        <div className="sharp-card bg-black p-8 md:p-12 relative">
          <form className="space-y-8">
            <div className="space-y-6">
              <div>
                <label className="block font-mono text-xs uppercase tracking-[0.2em] mb-3 text-neon font-bold">
                  Nombre del Proyecto
                </label>
                <input
                  className="w-full h-14 px-4 font-mono border-2 focus:ring-0 focus:border-primary bg-black outline-none"
                  placeholder="EJ. MI-HORARIO-IDEAL"
                  type="text"
                  disabled
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-[0.2em] mb-3 text-neon font-bold">
                  Subdominio deseado
                </label>
                <div className="flex">
                  <input
                    className="flex-1 h-14 px-4 font-mono border-2 border-r-0 focus:ring-0 focus:border-primary bg-black outline-none"
                    placeholder="mi-proyecto"
                    type="text"
                    disabled
                  />
                  <div className="h-14 px-6 flex items-center bg-white text-black font-mono font-bold border-2 border-white">
                    .cucei.dev
                  </div>
                </div>
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-[0.2em] mb-3 text-neon font-bold">
                  Correo Institucional
                </label>
                <input
                  className="w-full h-14 px-4 font-mono border-2 focus:ring-0 focus:border-primary bg-black outline-none"
                  placeholder="@alumnos.udg.mx"
                  type="email"
                  disabled
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-[0.2em] mb-3 text-neon font-bold">
                  Descripción
                </label>
                <textarea
                  className="w-full h-14 px-4 font-mono border-2 focus:ring-0 focus:border-primary bg-black outline-none"
                  disabled
                ></textarea>
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-[0.2em] mb-3 text-neon font-bold">
                  URL del Repositorio (GitHub/GitLab)
                </label>
                <input
                  className="w-full h-14 px-4 font-mono border-2 focus:ring-0 focus:border-primary bg-black outline-none"
                  placeholder="https://github.com/usuario/repo"
                  type="url"
                  disabled
                />
              </div>
            </div>
            <div className="pt-4">
              <button
                className="w-full bg-primary text-white h-16 font-black text-xl uppercase tracking-widest hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-4 group"
                type="submit"
                disabled
              >
                Solicitar Despliegue
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  rocket_launch
                </span>
              </button>
              <p className="mt-6 text-[10px] font-mono text-white/40 uppercase text-center tracking-[0.2em]">
                Sujeto a revisión por el comité técnico de cucei.dev
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
