import { motion, useScroll, useTransform } from "framer-motion";
import useMenuStore from "../stores/menu-store";
import { SOCIAL_MEDIA } from "../data/social-media-data";

export default function Header() {
  const handleOpenMenu = useMenuStore((state) => state.openMenu)
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, .98], ["0%", "100%"]);
  return (
    <header className="py-5 sticky top-0 backdrop-blur z-20">
      <motion.div
        className="absolute top-0 bg-[#40c9ff] h-1"
        style={{ width }}
      ></motion.div>
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-baseline">
            <img
              width="50"
              height="50"
              src="./src/assets/logo.svg"
              alt="Logo"
            />
          </div>
          <div className="flex items-center">
            <nav className={`hidden md:flex gap-4`}>
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.url}
                  target="_blank"
                  href={social.url}
                  className="hover:-translate-y-1 transform-gpu transition-transform"
                >
                  <img
                    src={`./src/assets/${social.icon}.svg`}
                    alt={`${social.name} Logo`}
                    className="w-6"
                  />
                </a>
              ))}
            </nav>
            <button onClick={handleOpenMenu} className="flex md:hidden flex-col gap-1">
              <div className="w-5 h-[3px] bg-neutral-800 rounded-full"></div>
              <div className="w-5 h-[3px] bg-neutral-800 rounded-full"></div>
              <div className="w-5 h-[3px] bg-neutral-800 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
