const SOCIAL_MEDIA_INFO = ["Proyectos", "CV"];

export default function Header() {
  return (
    <header className="py-5 sticky top-0 backdrop-blur z-20">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-baseline">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/badges/48/e.png"
              alt="e"
            />
          </div>
          <div className="flex items-center">
            <nav className={`hidden md:flex gap-4`}>
              {SOCIAL_MEDIA_INFO.map((name) => (
                <a key={name} href="#" className="text-blue-950 font-medium">
                  {name}
                </a>
              ))}
            </nav>
            <button className="flex md:hidden flex-col gap-1">
              <div className="w-5 h-[3px] bg-neutral-700 rounded-full"></div>
              <div className="w-5 h-[3px] bg-neutral-700 rounded-full"></div>
              <div className="w-5 h-[3px] bg-neutral-700 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}