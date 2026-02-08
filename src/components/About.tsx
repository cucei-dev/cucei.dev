import AboutItem from "./about/Item";

export default function About() {
  return (
    <section className="py-32 bg-black" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-0 border-2 border-white">
          <AboutItem
            icon="code"
            name="Open Source"
            description="Fomentamos la cultura del código abierto. Todos nuestros proyectos son colaborativos y están en GitHub para la posteridad."
            border
            hoverBgClass="hover:bg-white"
            hoverTextClass="hover:text-black"
            iconBorderClass="border-primary"
            iconTextClass="text-primary"
            iconHoverBgClass="group-hover:bg-primary"
            iconHoverTextClass="group-hover:text-black"
          />
          <AboutItem
            icon="groups"
            name="Colaboración"
            description="Conecta con otros estudiantes apacionados por el desarrollo. Hackathons meetups y proyectos grupales cada semestre."
            border
            hoverBgClass="hover:bg-neon"
            hoverTextClass="hover:text-black"
            iconBorderClass="border-neon"
            iconTextClass="text-neon"
            iconHoverBgClass="group-hover:bg-black"
            iconHoverTextClass="group-hover:text-neon"
          />
          <AboutItem
            icon="psychology"
            name="Mentoría"
            description="¿No sabes por dónde empezar? Contamos con guias de estudio y mentores dispuestos a ayudarte a dar tus primeros pasos."
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
