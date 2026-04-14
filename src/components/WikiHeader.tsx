import logoImg from "@/assets/sml-wiki-logo.png";
import fireImg from "@/assets/fire-header.png";

const navLinks = ["Episodes", "Games", "Cast", "Characters", "Places"];

const WikiHeader = () => {
  return (
    <header className="relative z-10">
      {/* Fire effect at top right */}
      <img
        src={fireImg}
        alt=""
        className="absolute top-0 right-0 w-1/2 h-20 object-cover pointer-events-none opacity-80"
        style={{ transform: "rotate(180deg)" }}
      />
      
      <div className="flex items-start justify-between px-4 py-2">
        {/* Logo */}
        <div className="relative z-10">
          <img src={logoImg} alt="SML Wiki" className="h-20 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1 pt-4 relative z-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`wiki-nav-link ${link === "Characters" ? "active" : ""}`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default WikiHeader;
