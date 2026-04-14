import characterImg from "@/assets/dr-rangel.png";

const CharacterInfobox = () => {

  return (
    <div className="w-[240px] shrink-0 border border-border bg-wiki-infobox-bg">
      {/* Header */}
      <div className="bg-wiki-infobox-header border-b border-border px-2 py-1">
        <h3 className="text-center text-sm font-bold text-accent" style={{ fontFamily: "'Special Elite', serif" }}>
          Appearance
        </h3>
      </div>

      {/* Single tab */}
      <div className="flex border-b border-border">
        <div className="flex-1 px-2 py-1 text-xs bg-wiki-infobox-header text-accent text-center">
          Current
        </div>
      </div>

      {/* Image */}
      <div className="p-2">
        <div className="border border-accent/30">
          <img
            src={characterImg}
            alt="Dr. Fredrick Finkleshitz"
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-foreground mt-1 leading-tight">
          Dr. Finklerangel Standing outside the secret door which was his old Laboratory.
        </p>

        {/* Audio player mock */}
        <div className="mt-2 bg-secondary border border-border flex items-center gap-1 p-1">
          <button className="text-accent text-xs px-1">▶</button>
          <div className="flex-1 h-2 bg-muted relative">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-accent/60" />
          </div>
          <span className="text-xs text-muted-foreground">0:30</span>
          <button className="text-accent text-xs px-1">🔊</button>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfobox;
