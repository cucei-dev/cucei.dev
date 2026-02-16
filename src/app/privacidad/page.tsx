export default function Privacidad() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <div className="inline-block px-4 py-1 border-2 border-neon text-neon font-mono text-xs mb-8 uppercase tracking-[0.2em] font-bold">
            DOCUMENTO LEGAL // v1.0
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-4 leading-none tracking-tighter uppercase">
            AVISO DE <br />
            <span className="text-primary">PRIVACIDAD</span>
          </h1>
        </header>
        <div className="flex flex-col lg:flex-row gap-16 relative">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
                Contenido
              </p>
              <nav className="flex flex-col space-y-2 font-mono text-xs uppercase tracking-widest">
                <a
                  className="sidebar-link border-l-2 border-white/20 pl-4 py-2 hover:text-neon hover:border-neon transition-all"
                  href="#identidad"
                >
                  1. Identidad
                </a>
                <a
                  className="sidebar-link border-l-2 border-white/20 pl-4 py-2 hover:text-neon hover:border-neon transition-all"
                  href="#finalidad"
                >
                  2. Finalidad
                </a>
                <a
                  className="sidebar-link border-l-2 border-white/20 pl-4 py-2 hover:text-neon hover:border-neon transition-all"
                  href="#datos"
                >
                  3. Datos Recabados
                </a>
                <a
                  className="sidebar-link border-l-2 border-white/20 pl-4 py-2 hover:text-neon hover:border-neon transition-all"
                  href="#derechos"
                >
                  4. Derechos ARCO
                </a>
                <a
                  className="sidebar-link border-l-2 border-white/20 pl-4 py-2 hover:text-neon hover:border-neon transition-all"
                  href="#transferencia"
                >
                  5. Transferencia
                </a>
                <a
                  className="sidebar-link border-l-2 border-white/20 pl-4 py-2 hover:text-neon hover:border-neon transition-all"
                  href="#seguridad"
                >
                  6. Seguridad
                </a>
              </nav>
            </div>
          </aside>
          <div className="grow max-w-4xl legal-content">
            <section className="scroll-mt-20" id="identidad">
              <h2>1. Identidad y Domicilio del Responsable</h2>
              <p>
                CUCEI.DEV, como comunidad de desarrollo tecnológico integrada
                por estudiantes del Centro Universitario de Ciencias Exactas e
                Ingenierías de la Universidad de Guadalajara, es responsable del
                tratamiento de sus datos personales conforme a lo dispuesto por
                la legislación mexicana vigente en materia de protección de
                datos personales.
              </p>
            </section>
            <section className="scroll-mt-20" id="finalidad">
              <h2>2. Finalidad del Tratamiento</h2>
              <p>
                Los datos personales que recabamos de usted serán utilizados
                para las siguientes finalidades necesarias para el servicio
                solicitado:
              </p>
              <ol>
                <li>
                  Facilitar el acceso a las herramientas de Horarios, Profesores
                  y Planificador.
                </li>
                <li>
                  Permitir la participación activa en nuestra comunidad de
                  Discord y GitHub.
                </li>
                <li>
                  Gestionar el registro de colaboradores en proyectos de código
                  abierto.
                </li>
                <li>
                  Generar estadísticas internas sobre el uso de nuestras
                  plataformas para mejorar la experiencia del usuario.
                </li>
              </ol>
            </section>
            <section className="scroll-mt-20" id="datos">
              <h2>3. Datos Personales Recabados</h2>
              <p>
                Para llevar a cabo las finalidades descritas, utilizaremos los
                siguientes datos:
              </p>
              <ol>
                <li>Nombre completo y/o seudónimo de desarrollador.</li>
                <li>Correo electrónico institucional o personal.</li>
                <li>
                  Identificadores de cuentas de terceros (GitHub, Discord)
                  vinculados a la plataforma.
                </li>
              </ol>
            </section>
            <section className="scroll-mt-20" id="derechos">
              <h2>4. Derechos ARCO</h2>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de
                usted, para qué los utilizamos y las condiciones del uso que les
                damos (Acceso). Asimismo, es su derecho solicitar la corrección
                de su información personal en caso de que esté desactualizada,
                sea inexacta o incompleta (Rectificación); que la eliminemos de
                nuestros registros o bases de datos cuando considere que la
                misma no está siendo utilizada adecuadamente (Cancelación); así
                como oponerse al uso de sus datos personales para fines
                específicos (Oposición).
              </p>
              <p>
                Para el ejercicio de cualquiera de los derechos ARCO, usted
                deberá presentar la solicitud respectiva a través de nuestro
                canal oficial de soporte en Discord o mediante correo
                electrónico dirigido a legal@cucei.dev.
              </p>
            </section>
            <section className="scroll-mt-20" id="transferencia">
              <h2>5. Transferencia de Datos</h2>
              <p>
                CUCEI.DEV no realiza transferencias de sus datos personales a
                terceros con fines comerciales. Las transferencias se limitan
                estrictamente a los servicios de infraestructura necesarios para
                la operación del sitio (hosting, autenticación de
                Firebase/Google/GitHub) y aquellas requeridas por autoridades
                competentes de la Universidad de Guadalajara en cumplimiento de
                la normativa institucional.
              </p>
            </section>
            <section className="scroll-mt-20" id="seguridad">
              <h2>6. Medidas de Seguridad</h2>
              <p>
                Implementamos estándares de seguridad de grado industrial,
                incluyendo cifrado SSL/TLS para toda comunicación y
                almacenamiento de datos, para proteger su información contra
                daño, pérdida, alteración, destrucción o el uso, acceso o
                tratamiento no autorizado. Como comunidad enfocada en el
                desarrollo, priorizamos la transparencia y la integridad de
                nuestros sistemas.
              </p>
            </section>
            <div className="mt-24 pt-8 border-t-2 border-white/20">
              <p className="font-mono text-sm tracking-widest text-primary font-bold uppercase">
                Última actualización: 15 de Febrero de 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
