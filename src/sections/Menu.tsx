import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import useMenuStore from "../stores/menu-store";

const SOCIAL_MEDIA = [
  {
    name: "Linked In",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/enocde-v/",
  },
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/EnocDE",
  },
  {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/edmz_/",
  },
  {
    name: "Email",
    icon: "email",
    url: "mailto:enocescazan@hotmail.com",
  },
];

export default function Menu() {
  const showMenu = useMenuStore(state => state.showMenu)
  const handleCloseMenu = useMenuStore(state => state.closeMenu)
  return (
    <div className={twMerge("fixed inset-0 bg-white z-20 transition ease-linear", !showMenu ? "translate-x-full" : "translate-x-0")}>
        <nav className="flex flex-col w-full h-full justify-center items-center gap-16">
          {SOCIAL_MEDIA.map((social, index) => (
            <motion.a
              key={social.url}
              target="_blank"
              href={social.url}
              className="w-20 flex items-center flex-col gap-2 font-medium group"
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: [0, 1],
                translateX: [index % 2 == 0 ? 150 : -150, 0],
              }}
              transition={{
                delay: index * .2,
              }}
            >
              <img
                src={`./src/assets/${social.icon}.svg`}
                alt={`${social.name} Logo`}
                className="object-cover bg-white"
              />
              <p className="text-center transition opacity-0 group-hover:opacity-100">
                {social.name}
              </p>
            </motion.a>
          ))}
        </nav>
      <button onClick={handleCloseMenu} className="absolute top-10 right-10 text-xl">×</button>
    </div>
  );
}