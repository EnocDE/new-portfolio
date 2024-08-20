import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white py-28 overflow-x-hidden">
      <motion.div className="container">
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
          ¿Quién soy yo?
        </motion.h2>
        <motion.p
          className="mt-10 text-blue-900 mx-auto text-center font-medium"
          initial={{
            opacity: 0,
            translateX: 100,
          }}
          whileInView={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
        >
          Soy un entusiasta del desarrollo frontend, siempre buscando
          aprendizaje para mejorar la experiencia de usuario mediante la
          creación de interfaces elegantes y eficientes. Me considero una
          persona curiosa, con un enfoque en aprender, y aplicarlo para resolver
          problemas de manera creativa. Disfruto mucho de lo que hago, y me
          apasiona trabajar en proyectos que combinan diseño y tecnología.
        </motion.p>
        <motion.picture
          className="rounded-full overflow-hidden block h-72 w-72 md:h-96 md:w-96 transition mt-14 mx-auto bg-blue-50"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .2,
            ease: "linear"
          }}
        >
          <source srcSet="./src/assets/picture.webp" type="image/webp" />
          <source srcSet="./src/assets/picture.png" type="image/png" />
          <motion.img
            src="./src/assets/picture.png"
            alt="Me"
            className="-scale-x-100"
            initial={{
              opacity: 0,
              scaleX: -1,
            }}
            whileInView={{
              opacity: 1,
              scaleX: -1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: .8,
            }}
          />
        </motion.picture>
      </motion.div>
    </section>
  );
}
