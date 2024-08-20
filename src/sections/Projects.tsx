import { motion } from "framer-motion";

const PROJECTS_DATA = [
  {
    name: "Uptask",
    technologies: [
      "MongoDb",
      "Express",
      "React.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "uptask",
    description:
      'Uptask es una aplicación de <span class="highlight-text">gestión de proyectos</span> que facilita el seguimiento de usuarios dentro de nuestro equipo de trabajo, así como de las tareas asignadas y sus respectivos estados. Además, permite el registro de comentarios y actualizaciones sobre el progreso de cada tarea realizadas por los miembros del equipo en el proyecto.',
    page: "https://uptask-frontend-one.vercel.app/auth/login",
    repository: "https://github.com/EnocDE/uptask_frontend",
  },
  {
    name: "Quiosco",
    technologies: ["Next.js", "React.js", "Prisma", "TailwindCSS"],
    image: "quiosco",
    description:
      'Este sistema es un <span class="highlight-text">quiosco de comida</span> que presenta un menú interactivo para que los clientes elijan y realicen sus pedidos. Incluye funcionalidades para administrar los productos mostrados en el menú, actualizar el estado de las órdenes desde la cocina, y una pantalla que muestra los últimos 5 pedidos listos para ser recogidos.',
    page: "https://quisco-next-app.vercel.app/order/cafe",
    repository: "https://github.com/EnocDE/quisco-next",
  },
  {
    name: "SaaS Landing Page",
    technologies: [
      "TypeScript",
      "React.js",
      "Next.JS",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "saas",
    description:
      'Landing page desarrollada para <span class="highlight-text">promocionar un SaaS</span>.',
    page: "https://landing-page-saas-parallax.vercel.app/",
    repository: "https://github.com/EnocDE/landing-page-parallax",
  },
  {
    name: "Calories Tracker",
    technologies: ["TypeScript", "React.js", "Tailwind CSS"],
    image: "tracker",
    description:
      'Esta aplicación proporciona la funcionalidad necesaria para llevar un detallado <span class="highlight-text">registro de las calorías</span> consumidas y las calorías gastadas a lo largo del día, permitiendo a los usuarios mantener un seguimiento preciso de su ingesta calórica y del gasto energético diario.',
    page: "https://enocde-calorie-tracker.netlify.app/",
    repository: "https://github.com/EnocDE/Calorie-Tracker",
  },
  {
    name: "Real State",
    technologies: ["HTML", "CSS", "SASS"],
    image: "realstate",
    description:
      'Un sitio web destinado a la <span class="highlight-text">promoción de la venta de casas</span>, con información sobre la empresa y las propiedades en venta, que incluye un blog con entradas de interés.',
    page: "https://enocde-real-state.netlify.app/",
    repository: "https://github.com/EnocDE/real-state",
  },
  {
    name: "Muebleria",
    technologies: ["HTML", "CSS"],
    image: "muebles",
    description:
      'Un sitio web dedicado a presentar de manera integral el <span class="highlight-text">catálogo de productos</span> ofrecidos por la empresa, acompañado de información detallada sus nuestros servicios y valores corporativos.',
    page: "https://enocde-muebleria.netlify.app/",
    repository: "https://github.com/EnocDE/Ecommerce-muebleria",
  },
];

export default function Projects() {
  return (
    <section className="pb-28 bg-white overflow-hidden">
      <div className="container">
        <motion.h2
          className="title"
          initial={{
            opacity: 0,
            translateX: 100,
          }}
          whileInView={{
            opacity: 1,
            translateX: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          Proyectos
        </motion.h2>
        <ul className="grid md:grid-cols-2 justify-items-center gap-5 mt-10 transform-gpu">
          {PROJECTS_DATA.map(
            ({ name, image, page, repository, technologies }, index) => (
              <motion.li
                key={name}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <div className="overflow-hidden rounded-xl">
                  <img src={`./src/assets/projects/${image}.png`} alt="" className="hover:scale-[1.15] transition" />
                </div>
                <h3 className="font-bold text-2xl text-blue-950 tracking-tight">
                  {name}
                </h3>
                <ul className="flex flex-wrap gap-x-2">
                  {technologies.map((tech) => (
                    <li
                      key={`${name} ${tech}`}
                      className="tracking-tighter text-blue-900"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-5 mt-2">
                  <a
                    href={page}
                    target="_blank"
                    className="inline-block py-2 px-3 border rounded-xl shadow-[0_5px_5px_#e3e3e390]"
                  >
                    Ver
                  </a>
                  <a
                    href={repository}
                    target="_blank"
                    className="inline-block py-2 px-3 border rounded-xl shadow-[0_5px_5px_#e3e3e390]"
                  >
                    Repositorio
                  </a>
                </div>
              </motion.li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
