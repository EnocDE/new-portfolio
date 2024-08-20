import { motion, useSpring } from "framer-motion";

export default function Hero() {
  const x = useSpring(0);
  return (
    <section className="bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,#ffffff,#cedbef_100%)] pt-8 pb-20 backdrop-blur overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px] text-blue-900 relative">
            <motion.h1
              className="title text-6xl text-left"
              animate={{
                translateX: [100, 0],
                opacity: [0, 1],
              }}
            >
              Enoc
              <span className="block">Domínguez</span>
              <span className="block">Escazán</span>
            </motion.h1>
            <motion.div
              animate={{
                translateX: [100, 0],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.2,
              }}
            >
              <motion.h2
                className="text-4xl font-semibold mt-10 tracking-tight bg-[linear-gradient(to_right,#40c9ff,#e81cff,#40c9ff,#e81cff,#40c9ff)] [background-size:200%] text-transparent bg-clip-text "
                animate={{
                  backgroundPositionX: "100%",
                }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                  duration: 2,
                }}
              >
                Frontend Developer
              </motion.h2>
            </motion.div>
            <motion.p
              className="mt-5 font-medium"
              animate={{ translateX: [100, 0], opacity: [0, 1] }}
              transition={{
                delay: 0.4
              }}
            >
              Hola, soy un desarrollador frontend especializado en crear
              aplicaciones web responsivas y visualmente atractivas.
              <span className="inline-block font-semibold">
                ¡Explora mis proyectos!
              </span>
            </motion.p>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src="./src/assets/purple-curve.png"
              alt="Rize Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 drop-shadow-xl"
              animate={{
                opacity: [0, 1],
                scale: [1.5, 1]
              }}
              style={{
                x,
              }}
              drag
              dragConstraints={{
                bottom: 0,
                top: 0,
                left: 0,
                right: 0
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
