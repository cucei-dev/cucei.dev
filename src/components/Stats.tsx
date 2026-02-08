export default function Stats() {
  return (
    <section className="py-24 bg-black border-y-2 border-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="border-l-4 border-primary pl-6">
            <div className="text-6xl font-black mb-2 tracking-tighter">?</div>
            <div className="font-mono text-sm uppercase tracking-widest text-primary">
              Ingenieros
            </div>
          </div>
          <div className="border-l-4 border-neon pl-6">
            <div className="text-6xl font-black mb-2 tracking-tighter">?</div>
            <div className="font-mono text-sm uppercase tracking-widest text-neon">
              Commits
            </div>
          </div>
          <div className="border-l-4 border-white pl-6">
            <div className="text-6xl font-black mb-2 tracking-tighter">?</div>
            <div className="font-mono text-sm uppercase tracking-widest text-white">
              Proyectos
            </div>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <div className="text-6xl font-black mb-2 tracking-tighter">
              100%
            </div>
            <div className="font-mono text-sm uppercase tracking-widest text-primary">
              Open Source
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
