type AboutItemProps = {
  icon: string;
  name: string;
  description: string;
  border?: boolean;
  hoverBgClass?: string;
  hoverTextClass?: string;
  iconBorderClass?: string;
  iconTextClass?: string;
  iconHoverBgClass?: string;
  iconHoverTextClass?: string;
};

export default function AboutItem({
  icon,
  name,
  description,
  border = false,
  hoverBgClass = "hover:bg-white",
  hoverTextClass = "hover:text-black",
  iconBorderClass = "border-primary",
  iconTextClass = "text-primary",
  iconHoverBgClass = "group-hover:bg-primary",
  iconHoverTextClass = "group-hover:text-black",
}: Readonly<AboutItemProps>) {
  return (
    <div
      className={`p-12 flex flex-col justify-between group transition-colors
        ${hoverBgClass} ${hoverTextClass}
        ${border ? "border-b-2 lg:border-b-0 lg:border-r-2 border-white" : ""}
      `}
    >
      <div>
        <div
          className={`w-16 h-16 border-2 flex items-center justify-center mb-10 transition-colors
            ${iconBorderClass}
            ${iconTextClass}
            ${iconHoverBgClass}
            ${iconHoverTextClass}
          `}
        >
          <span className="material-symbols-outlined text-4xl">{icon}</span>
        </div>
        <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">
          {name}
        </h3>
        <p className="text-lg leading-relaxed mb-8 opacity-80 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
}
