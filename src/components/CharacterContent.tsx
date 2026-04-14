const CharacterContent = () => {
  return (
    <div className="flex-1 min-w-0">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl text-accent text-glow mb-8 tracking-wide">
        Dr. Fredrick Rangel
      </h1>

      {/* About Section */}
      <section className="mb-2">
        <h2 className="text-2xl text-wiki-heading text-glow mb-4">About</h2>
        <p className="text-wiki-text leading-relaxed text-base">
          Dr. Finklerangel was one of few people to have witnessed the begenning of the end of the world and is one of the main causes for the Virus infecting the world.
        </p>
      </section>

      <hr className="border-border my-6" />

      {/* Experiments Section */}
      <section className="mb-2">
        <h2 className="text-2xl text-wiki-heading text-glow mb-4">Experiments</h2>
        <p className="text-wiki-text leading-relaxed text-base">
          Dr. Finklerangel experimented on rangelets until a violent, necrotic cough released a virus that unmade the first victim into black ink. The contagion immediately went airborne, saturating the globe and rewriting the atmosphere. Now, as the world panics, humanity is realizing that their every breath is no longer their own—it is the Doctor’s.
        </p>
      </section>

      <hr className="border-border my-6" />

      {/* Facebook Section */}
      <section className="mb-2">
        <h2 className="text-2xl text-wiki-heading text-glow mb-4">Extra:</h2>
        <p className="text-wiki-text leading-relaxed text-base">
          Rangel
        </p>
      </section>
    </div>
  );
};

export default CharacterContent;
