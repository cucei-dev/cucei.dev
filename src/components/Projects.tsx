import ProjectItem from "./projects/Item";

export default function Projects() {
  return (
    <section className="py-32 bg-black" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-20 border-l-8 border-neon pl-8">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Project Hub
          </h2>
          <p className="text-neon font-mono tracking-widest uppercase">
            Herramientas principales en desarrollo
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-0 border-2 border-white">
          <ProjectItem
            id="horarios"
            icon="calendar_month"
            name="Horarios"
            description="Consulta rápida y eficiente de la oferta académica. Revisa horarios de aulas y disponibilidad de materias en tiempo real."
            stack={["Public", "Astro", "React"]}
            linkText="Acceder App"
            link="#"
            border
            hoverBgClass="hover:bg-white"
            hoverTextClass="hover:text-black"
            iconBorderClass="border-primary"
            iconTextClass="text-primary"
            iconHoverBgClass="group-hover:bg-primary"
            iconHoverTextClass="group-hover:text-white"
          />
          <ProjectItem
            id="profesores"
            icon="person_search"
            name="Profesores"
            description="Plataforma de reseñas y calificaciones. Encuentra el perfil ideal de tus docentes basándote en la experiencia de la comunidad."
            stack={["Community", "NextJS", "FastAPI"]}
            linkText="Ver Rankings"
            link="#"
            border
            hoverBgClass="hover:bg-neon"
            hoverTextClass="hover:text-black"
            iconBorderClass="border-neon"
            iconTextClass="text-neon"
            iconHoverBgClass="group-hover:bg-black"
            iconHoverTextClass="group-hover:text-neon"
          />
          <ProjectItem
            id="planificador"
            icon="dashboard_customize"
            name="Planificador"
            description="Diseña tu semestre ideal. Simula combinaciones de horarios, evita cruces y optimiza tu tiempo de estudio automáticamente."
            stack={["Coming soon", "NextJS", "FastAPI"]}
            linkText="Iniciar Plan"
            link="#"
            hoverBgClass="hover:bg-primary"
            hoverTextClass="hover:text-white"
            iconBorderClass="border-white"
            iconTextClass="text-white"
            iconHoverBgClass="group-hover:bg-white"
            iconHoverTextClass="group-hover:text-primary"
          />
        </div>
      </div>
    </section>
  );
}
