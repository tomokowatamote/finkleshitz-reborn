import { useLocation, Link } from "react-router-dom";
import logoImg from "@/assets/sml-wiki-logo-new.png";
import fireImg from "@/assets/fire-header.png";

const navLinks = [
  { label: "Unavailable", path: "#" },
  { label: "Unavailable", path: "#" },
  { label: "​Unavailable", path: "#" },
  { label: "Characters", path: "/" },
  { label: "Unavailable", path: "#" },
];

const WikiHeader = () => {
  const location = useLocation();
  const isCharactersActive = location.pathname === "/" || location.pathname.startsWith("/characters");

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
        <Link to="/" className="relative z-10">
          <img src={logoImg} alt="SML Wiki" className="h-20 w-auto rounded-none" />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 pt-4 relative z-10 flex-wrap justify-end">
          {navLinks.map((link) => (
            link.path === "#" ? (
              <span
                key={link.label}
                className="wiki-nav-link cursor-not-allowed"
              >
                {link.label}
              </span>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={`wiki-nav-link ${
                  link.label === "Characters" && isCharactersActive ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default WikiHeader;
