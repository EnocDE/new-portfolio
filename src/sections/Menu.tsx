import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import useMenuStore from "../stores/menu-store";
import { useEffect } from "react";
import { SOCIAL_MEDIA } from "../data/social-media-data";

export default function Menu() {
  const showMenu = useMenuStore((state) => state.showMenu);
  const handleCloseMenu = useMenuStore((state) => state.closeMenu);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && showMenu) {
        handleCloseMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showMenu, handleCloseMenu]);

  return (
    <div
      className={twMerge(
        "fixed inset-0 bg-white z-20 transition ease-linear",
        !showMenu ? "translate-x-full" : "translate-x-0"
      )}
    >
      <nav className="flex flex-col w-full h-full justify-center items-center gap-16">
        {SOCIAL_MEDIA.map((social, index) => (
          <motion.a
            key={social.url}
            target="_blank"
            href={social.url}
            className="w-20 flex items-center flex-col gap-2 font-medium group"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: [0, 1],
              translateX: [index % 2 == 0 ? 150 : -150, 0],
            }}
            transition={{
              delay: index * 0.2,
            }}
          >
            <img
              src={`/images/${social.icon}.svg`}
              alt={`${social.name} Logo`}
              className="object-cover bg-white"
            />
            <p className="text-center transition opacity-0 group-hover:opacity-100">
              {social.name}
            </p>
          </motion.a>
        ))}
      </nav>
      <button
        onClick={handleCloseMenu}
        className="absolute top-10 right-10 text-xl"
      >
        ×
      </button>
    </div>
  );
}
