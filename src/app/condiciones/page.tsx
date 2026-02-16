import Link from "next/link";

export default function Condiciones() {
  return (
    <>
      <section className="relative pt-40 pb-20 grid-pattern border-b-2 border-white">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-block px-4 py-1 border-2 border-neon text-neon font-mono text-xs mb-8 uppercase tracking-[0.2em] font-bold">
            DOCUMENTACIÓN LEGAL // VER. 2024.1
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-none tracking-tighter uppercase">
            Términos <br /> &amp;{" "}
            <span className="text-primary">Condiciones</span>
          </h1>
          <p className="md:text-xl text-white font-light max-w-2xl">
            Última actualización: 15 de Febrero, 2026. Al acceder a cucei.dev y
            sus subdominios, aceptas cumplir con los lineamientos aquí
            descritos.
          </p>
        </div>
      </section>
      <main className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-4 border-neon p-8 mb-16 bg-black">
            <div className="flex items-center gap-4 mb-4 text-neon">
              <span className="material-symbols-outlined font-bold">
                warning
              </span>
              <span className="font-mono font-black uppercase tracking-widest">
                Aviso Importante
              </span>
            </div>
            <p className="text-white font-bold md:text-lg">
              cucei.dev es una iniciativa independiente creada por estudiantes
              para estudiantes. No somos una entidad oficial de la Universidad
              de Guadalajara, aunque operamos con el máximo respeto a sus
              normativas institucionales.
            </p>
          </div>
          <div className="legal-content">
            <section>
              <h2>1. Uso de la Plataforma</h2>
              <p>
                El acceso a cucei.dev y sus subdominios asociados
                (horarios.cucei.dev, profes.cucei.dev, etc.) es gratuito y
                destinado exclusivamente a fines académicos y de apoyo a la
                comunidad estudiantil.
              </p>
              <p>Queda estrictamente prohibido:</p>
              <ul>
                <li>
                  Realizar ataques de denegación de servicio (DoS) contra
                  nuestra infraestructura.
                </li>
                <li>
                  Utilizar scripts de scraping que comprometan la estabilidad de
                  los servidores.
                </li>
                <li>
                  Suplantar la identidad de otros estudiantes o académicos.
                </li>
                <li>
                  Publicar contenido que viole el Código de Ética de la
                  Universidad de Guadalajara.
                </li>
              </ul>
            </section>
            <section>
              <h2>2. Subdominios y Proyectos</h2>
              <p>
                Cada proyecto alojado bajo el dominio cucei.dev puede tener sus
                propias reglas específicas de uso técnico, las cuales estarán
                disponibles en sus respectivos repositorios de GitHub.
              </p>
              <div className="border-2 border-white p-6 my-8">
                <p className="font-mono text-sm uppercase mb-2 text-neon">
                  Nota de Configuración:
                </p>
                <p className="text-sm font-light m-0">
                  Los subdominios se otorgan a proyectos de código abierto que
                  beneficien directamente a la comunidad CUCEI tras una revisión
                  técnica del core team.
                </p>
              </div>
            </section>
            <section>
              <h2>3. Contenido de los Proyectos</h2>
              <p>
                La información mostrada en &quot;Horarios&quot; y
                &quot;Profesores&quot; se basa en datos públicos y aportaciones
                de la comunidad. No garantizamos la exactitud absoluta de los
                datos, ya que estos pueden cambiar por decisiones
                administrativas de la institución sin previo aviso.
              </p>
              <p>
                Los usuarios son responsables de verificar la información
                crítica directamente en las plataformas oficiales (SIIAU).
              </p>
            </section>
            <section>
              <h2>4. Reglas de la Comunidad</h2>
              <p>
                La participación en nuestro Discord o en las secciones de
                reseñas de profesores debe mantenerse profesional y
                constructiva.
              </p>
              <ul>
                <li>Cero tolerancia al acoso o discriminación.</li>
                <li>
                  Las críticas a docentes deben basarse en el desempeño
                  académico, no en aspectos personales.
                </li>
                <li>
                  No compartir material protegido por derechos de autor sin
                  autorización.
                </li>
              </ul>
            </section>
            <div className="border-4 border-neon p-8 my-16 bg-black">
              <div className="flex items-center gap-4 mb-4 text-neon">
                <span className="material-symbols-outlined font-bold">
                  gavel
                </span>
                <span className="font-mono font-black uppercase tracking-widest">
                  Consecuencias
                </span>
              </div>
              <p className="text-white font-bold md:text-lg">
                El incumplimiento de estas normas resultará en la revocación
                inmediata del acceso a los servicios de cucei.dev y, en casos
                graves, el reporte a las autoridades universitarias competentes.
              </p>
            </div>
            <section>
              <h2>5. Propiedad Intelectual</h2>
              <p>
                La mayoría de nuestras herramientas son Open Source bajo
                licencia AGPL-3.0. Puedes contribuir, clonar o modificar el
                código siempre que respetes los términos de dicha licencia y des
                el crédito correspondiente a los autores originales.
              </p>
            </section>
          </div>
          <div className="mt-20 pt-12 border-t-2 border-white flex flex-col md:flex-row justify-between items-center gap-8">
            <Link
              className="flex items-center gap-2 font-black uppercase tracking-widest text-sm hover:text-primary transition-colors"
              href="/"
            >
              <span className="material-symbols-outlined">arrow_back</span>{" "}
              Regresar al Hub
            </Link>
            <p className="font-mono text-xs uppercase tracking-widest text-white/60">
              Fin del documento
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
