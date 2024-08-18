const SOCIAL_MEDIA = [
  {
    name: "Linked In",
    icon: "linkedin",
    url: "",
  },
  {
    name: "GitHub",
    icon: "github",
    url: "",
  },
  {
    name: "Insagram",
    icon: "instagram",
    url: "",
  },
  {
    name: "Email",
    icon: "email",
    url: "",
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 p-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-white text-center">
            {new Date().getFullYear()} - Enoc Domínguez Escazán
          </p>
          <nav className="flex gap-5 flex-wrap items-center justify-center">
            {SOCIAL_MEDIA.map((social) => (
              <a href={social.url} className="hover:-translate-y-1 transform-gpu transition-transform">
                <img
                  src={`./src/assets/${social.icon}.svg`}
                  alt={`${social.name} Logo`}
                  className="invert w-6"
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
