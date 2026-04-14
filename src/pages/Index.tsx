import WikiHeader from "@/components/WikiHeader";
import CharacterInfobox from "@/components/CharacterInfobox";
import CharacterContent from "@/components/CharacterContent";
import bgTexture from "@/assets/bg-texture.jpg";
import contentBg from "@/assets/content-bg.jpg";

const Index = () => {
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

      {/* Main content area */}
      <main className="max-w-[950px] mx-auto mt-4 mb-8">
        <div
          className="border border-border p-6 md:p-8"
          style={{
            backgroundImage: `url(${contentBg})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            backgroundColor: "hsl(0 80% 12% / 0.85)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <CharacterContent />
            <CharacterInfobox />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
