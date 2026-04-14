import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { characters } from "@/data/characters";
import WikiHeader from "@/components/WikiHeader";
import bgTexture from "@/assets/bg-texture.jpg";
import contentBg from "@/assets/content-bg.jpg";

const Characters = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return null;
    return characters.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const popular = characters.filter((c) => c.category === "popular");
  const other = characters.filter((c) => c.category === "other");

  const showFiltered = search.trim().length > 0;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <WikiHeader />

      <main className="max-w-[950px] mx-auto mt-4 mb-8 px-2">
        {/* Search bar */}
        <div
          className="border border-border p-3 mb-4"
          style={{
            backgroundImage: `url(${contentBg})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            backgroundColor: "hsl(0 80% 12% / 0.7)",
          }}
        >
          <input
            type="text"
            placeholder="Search for characters..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 bg-secondary/80 border border-border text-foreground px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent"
            style={{ fontFamily: "'Special Elite', serif" }}
          />
        </div>

        {showFiltered ? (
          /* Search results */
          <Section title="Search results:" bgImg={contentBg}>
            {filtered && filtered.length > 0 ? (
              <CharacterGrid chars={filtered} />
            ) : (
              <p className="text-muted-foreground text-sm py-4">No characters found.</p>
            )}
          </Section>
        ) : (
          <>
            {/* Popular characters */}
            <Section title="Popular characters" subtitle="These character pages are frequently searched or popular right now:" bgImg={contentBg}>
              <CharacterGrid chars={popular} />
            </Section>

            {/* Other characters */}
            <Section title="Other characters" bgImg={contentBg} className="mt-4">
              <CharacterGrid chars={other} />
            </Section>
          </>
        )}
      </main>
    </div>
  );
};

const Section = ({
  title,
  subtitle,
  children,
  bgImg,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bgImg: string;
  className?: string;
}) => (
  <div className={className}>
    <div
      className="border border-border p-4"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "hsl(0 80% 15% / 0.6)",
      }}
    >
      <h2 className="text-3xl text-accent text-glow mb-1">{title}</h2>
      {subtitle && (
        <p className="text-foreground text-sm mb-4" style={{ fontFamily: "'Special Elite', serif" }}>
          {subtitle}
        </p>
      )}
    </div>
    <div
      className="border border-t-0 border-border p-4"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "hsl(0 0% 10% / 0.75)",
      }}
    >
      {children}
    </div>
  </div>
);

const CharacterGrid = ({ chars }: { chars: typeof characters }) => (
  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
    {chars.map((char) => (
      <Link
        key={char.id}
        to={char.id === "dr-finkleshitz" ? "/characters/dr-finkleshitz" : "#"}
        className="group flex flex-col items-center w-[120px] transition-transform hover:scale-105"
      >
        <div className="w-[110px] h-[110px] border border-accent/40 overflow-hidden bg-secondary group-hover:border-accent transition-colors">
          <img
            src={char.image}
            alt={char.name}
            loading="lazy"
            width={110}
            height={110}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-foreground text-xs mt-1 text-center leading-tight group-hover:text-accent transition-colors">
          {char.name}
        </span>
      </Link>
    ))}
  </div>
);

export default Characters;
