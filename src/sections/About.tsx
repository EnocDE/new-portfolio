export default function About() {
  return (
    <section className="bg-white py-28 overflow-x-hidden">
      <div className="container">
        <h2 className="title">¿Quién soy yo?</h2>
        <p className="mt-10 text-blue-900 mx-auto text-center font-medium">
          Soy un entusiasta del desarrollo frontend, siempre buscando
          aprendizaje para mejorar la experiencia de usuario mediante la
          creación de interfaces elegantes y eficientes. Me considero una
          persona curiosa, con un enfoque en aprender, y aplicarlo para resolver
          problemas de manera creativa. Disfruto mucho de lo que hago, y me
          apasiona trabajar en proyectos que combinan diseño y tecnología.
        </p>
        <picture className="rounded-full overflow-hidden block h-72 w-72 md:h-96 md:w-96 transition mt-14 mx-auto bg-blue-50">
          <source srcSet="./src/assets/picture.webp" type="image/webp" />
          <source srcSet="./src/assets/picture.png" type="image/png" />
          <img
            src="./src/assets/picture.png"
            alt="Me"
            className="-scale-x-100"
          />
        </picture>
      </div>
    </section>
  );
}
