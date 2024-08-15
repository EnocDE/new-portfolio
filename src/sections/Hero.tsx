export default function Hero() {
  return (
    <section className="bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,#ffffff,#cedbef_100%)] pt-8 pb-20 backdrop-blur overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px] text-blue-900 relative">
            <h1 className="title text-6xl text-left">
              Enoc 
              <span className="block">Domínguez</span>
              <span className="block">Escazán</span>
            </h1>
            <h2 className="text-4xl font-semibold mt-10 tracking-tight">
              Frontend Developer
            </h2>
            <p className="mt-5 font-medium">
              Hola, soy un desarrollador frontend especializado en crear
              aplicaciones web responsivas y visualmente atractivas.
              <span className="inline-block font-semibold">¡Explora mis proyectos!</span>
            </p>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <img
              src="./src/assets/purple-curve.png"
              alt="Rize Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 rotate- "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
