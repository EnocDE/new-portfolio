import { SOCIAL_MEDIA } from "../data/social-media-data";

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
              <a
                key={social.url}
                target="_blank"
                href={social.url}
                className="hover:-translate-y-1 transform-gpu transition-transform"
              >
                <img
                  src={`/images/${social.icon}.svg`}
                  alt={`${social.name} Logo`}
                  className="invert w-6"
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
