export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="font-mono text-2xl font-extrabold tracking-tighter text-white">
              CUCEI<span className="text-primary">.</span>DEV
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-10 font-mono text-sm uppercase tracking-widest">
            <a
              className="hover:text-primary transition-colors"
              href="#horarios"
            >
              Horarios
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="#profesores"
            >
              Profesores
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="#planificador"
            >
              Planificador
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="#"
            >
              Blog
            </a>
            <a
              className="border-2 border-neon text-neon px-6 py-2 hover:bg-neon hover:text-black transition-all font-bold"
              href="#join"
            >
              UNIRSE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
