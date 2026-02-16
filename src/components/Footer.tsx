export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="font-mono text-3xl font-black text-white mb-8 tracking-tighter uppercase">
              CUCEI<span className="text-primary">.</span>DEV
            </div>
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
                <a className="hover:text-primary transition-colors" href="#">
                  Horarios
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Profesores
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Planificador
                </a>
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
                <a className="hover:text-neon transition-colors" href="#">
                  Contribuidores
                </a>
              </li>
              <li>
                <a className="hover:text-neon transition-colors" href="#">
                  Hackathons
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-widest mb-8 text-sm border-b-2 border-white pb-2 inline-block">
              Legal
            </h5>
            <ul className="space-y-4 font-mono text-sm uppercase">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Código de Conducta
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Privacidad
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-8 grayscale brightness-200 opacity-50">
            <div className="font-mono text-3xl font-black text-white mb-8 tracking-tighter uppercase">
              CUCEI<span className="text-primary">.</span>DEV
            </div>
          </div>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
            © {new Date().getFullYear()} cucei.dev // Built with precision &amp; caffeine.
          </p>
        </div>
      </div>
    </footer>
  );
}
