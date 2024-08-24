import { motion } from "framer-motion";

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
          Tecnologías
        </motion.h2>
        <div className="relative">
          <motion.p
            className="mt-10 text-center text-blue-900 font-medium"
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
            transition={{
              delay: 0.2,
            }}
          >
            Me encanta trabajar con tecnologías modernas que me permiten crear
            experiencias web atractivas y eficientes. Estas son algunas de las
            herramientas y lenguajes que utilizo:
          </motion.p>
          <ul className="grid grid-cols-2 md:grid-cols-5 justify-items-center gap-5 mt-10">
            {TECH_DATA.map(({ name, icon }, index) => (
              <motion.li
                key={name}
                initial={{
                  opacity: 0,
                  translateX: 50,
                }}
                whileInView={{
                  opacity: 1,
                  translateX: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <motion.img
                  src={`/images/${icon}.svg`}
                  alt={`${name} Image`}
                  width={150}
                  height={150}
                  className="drop-shadow-lg select-none"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
