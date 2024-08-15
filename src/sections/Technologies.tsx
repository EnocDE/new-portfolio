const TECH_DATA = [
  {
    name: "HTML",
    icon: "html",
  },
  {
    name: "CSS",
    icon: "css",
  },
  {
    name: "JavaScript",
    icon: "javascript",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "React",
    icon: "react",
  },
  {
    name: "Tailwind",
    icon: "tailwind",
  },
  {
    name: "SASS",
    icon: "sass",
  },
  {
    name: "Git",
    icon: "git",
  },
  {
    name: "GitHub",
    icon: "github",
  },
  {
    name: "Next.js",
    icon: "nextjs",
  },
];

export default function Technologies() {
  return (
    <section className="bg-white overflow-x-clip pb-28">
      <div className="container">
        <h2 className="title">Tecnologías</h2>
        <div className="relative">
          <p className="mt-10 text-center text-blue-900 font-medium">
            Me encanta trabajar con tecnologías modernas que me permiten crear
            experiencias web atractivas y eficientes. Estas son algunas de las
            herramientas y lenguajes que utilizo:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-5 justify-items-center gap-5 mt-10">
            {TECH_DATA.map(({ name, icon }) => (
              <img
                key={name}
                src={`./src/assets/${icon}.svg`}
                alt={`${name} Image`}
                width={150}
                className="drop-shadow-lg"
              />
            ))}
          </ul>
          <img
            src="./src/assets/yellow-curve.png"
            alt="Yellow Curve Image"
            className="absolute -left-60 rotate-180"
            width={250}
          />
          <img
            src="./src/assets/red-capsule.png"
            alt="Yellow Curve Image"
            className="absolute -top-28 -right-60 rotate-180"
            width={250}
          />
        </div>
      </div>
    </section>
  );
}
