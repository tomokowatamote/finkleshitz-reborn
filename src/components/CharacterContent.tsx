const CharacterContent = () => {
  return (
    <div className="flex-1 min-w-0">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl text-accent text-glow mb-8 tracking-wide">
        Dr. Fredrick Finkleshitz
      </h1>

      {/* About Section */}
      <section className="mb-2">
        <h2 className="text-2xl text-wiki-heading text-glow mb-4">About</h2>
        <p className="text-wiki-text leading-relaxed text-base">
          Dr. Finkleshitz was one of few people to have survived the day of imbalance
          with minimal harm done to him. After waking up from a coma and seeing the
          world he once knew completely changed, he knew that it was his job to fix everything
          that the Day of Imbalance has caused.
        </p>
      </section>

      <hr className="border-border my-6" />

      {/* Experiments Section */}
      <section className="mb-2">
        <h2 className="text-2xl text-wiki-heading text-glow mb-4">Experiments</h2>
        <p className="text-wiki-text leading-relaxed text-base">
          Dr. Finkleshitz went around capturing the random entities with cages and
          beartraps set around the main neighborhood. He then took these entities to his
          lab and experimented on them. His ultimate goal was to reverse the effects of
          the Day of Imbalance. He unfortunately passed away after running an experiment on
          something too dangerous for him. Some speculate that he mistakenly locked
          eyes with{" "}
          <a href="#" className="text-wiki-link underline hover:brightness-125">
            Braxton Jr.
          </a>
        </p>
      </section>

      <hr className="border-border my-6" />

      {/* Facebook Section */}
      <section className="mb-2">
        <h2 className="text-2xl text-wiki-heading text-glow mb-4">Facebook</h2>
        <p className="text-wiki-text leading-relaxed text-base">
          Dr. Finkleshitz had a facebook page,
          which can be found here:{" "}
          <a href="#" className="text-wiki-link underline hover:brightness-125">
            facebook.com/drfinkleshitz
          </a>
        </p>
      </section>
    </div>
  );
};

export default CharacterContent;
