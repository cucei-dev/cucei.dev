import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="font-mono text-3xl font-black text-white mb-8 tracking-tighter uppercase">
              CUCEI<span className="text-primary">.</span>DEV
            </Link>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Comunidad autónoma de desarrollo tecnológico. Impulsando la
              cultura hacker y el código abierto dentro de la Universidad de
              Guadalajara.
            </p>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-widest mb-8 text-sm border-b-2 border-primary pb-2 inline-block">
              Proyectos
            </h5>
            <ul className="space-y-4 font-mono text-sm uppercase">
              <li>
                <Link className="hover:text-primary transition-colors" href="/#horarios">
                  Horarios
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#profesores">
                  Profesores
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#planificador">
                  Planificador
                </Link>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="https://api.cucei.dev/redoc">
                  Documentación
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-widest mb-8 text-sm border-b-2 border-neon pb-2 inline-block">
              Comunidad
            </h5>
            <ul className="space-y-4 font-mono text-sm uppercase">
              <li>
                <Link className="hover:text-neon transition-colors" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <a className="hover:text-neon transition-colors" href="https://github.com/cucei-dev">
                  GitHub
                </a>
              </li>
              <li>
                <a className="hover:text-neon transition-colors" href="#">
                  Discord
                </a>
              </li>
              <li>
                <Link className="hover:text-neon transition-colors" href="/team">
                  Contribuidores
                </Link>
              </li>
              <li>
                <Link className="hover:text-neon transition-colors" href="/hack">
                  Hackathons
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-widest mb-8 text-sm border-b-2 border-white pb-2 inline-block">
              Legal
            </h5>
            <ul className="space-y-4 font-mono text-sm uppercase">
              <li>
                <Link className="hover:text-primary transition-colors" href="/conducta">
                  Código de Conducta
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/privacidad">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/condiciones">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-8 grayscale brightness-200 opacity-50">
            <Link href="/" className="font-mono text-3xl font-black text-white mb-8 tracking-tighter uppercase">
              CUCEI<span className="text-primary">.</span>DEV
            </Link>
          </div>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
            © {new Date().getFullYear()} cucei.dev // Built with precision &amp; caffeine.
          </p>
        </div>
      </div>
    </footer>
  );
}
