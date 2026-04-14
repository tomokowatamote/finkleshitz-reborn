import juniorImg from "@/assets/characters/junior.jpg";
import marvinImg from "@/assets/characters/marvin.jpg";
import codyImg from "@/assets/characters/cody.jpg";
import josephImg from "@/assets/characters/joseph.jpg";
import shrekImg from "@/assets/characters/shrek.jpg";
import braxtonImg from "@/assets/characters/braxton.jpg";
import chefPeePeeImg from "@/assets/characters/chef-peepee.jpg";
import brooklynGuyImg from "@/assets/characters/brooklyn-guy.jpg";
import goldenImg from "@/assets/characters/golden.jpg";
import freddyFidgetImg from "@/assets/characters/freddy-fidget.jpg";
import luigiImg from "@/assets/characters/luigi.jpg";
import mysteryImg from "@/assets/characters/mystery.jpg";
import drFinkleshitzImg from "@/assets/dr-finkleshitz.jpg";

export interface Character {
  id: string;
  name: string;
  image: string;
  category: "popular" | "other";
}

export const characters: Character[] = [
  { id: "marvin", name: "Marvin", image: marvinImg, category: "popular" },
  { id: "junior", name: "Junior", image: juniorImg, category: "popular" },
  { id: "cody", name: "Cody", image: codyImg, category: "popular" },
  { id: "joseph", name: "Joseph", image: josephImg, category: "popular" },
  { id: "shrek", name: "Shrek", image: shrekImg, category: "popular" },
  { id: "chef-pee-pee", name: "Chef Pee Pee", image: chefPeePeeImg, category: "popular" },
  { id: "braxton-jr", name: "Braxton Jr.", image: braxtonImg, category: "other" },
  { id: "brooklyn-guy", name: "Brooklyn Guy", image: brooklynGuyImg, category: "other" },
  { id: "luigi", name: "Luigi", image: luigiImg, category: "other" },
  { id: "freddy-fidget", name: "Freddy Fidget", image: freddyFidgetImg, category: "other" },
  { id: "golden", name: "Golden", image: goldenImg, category: "other" },
  { id: "dr-finkleshitz", name: "Dr. Finkleshitz", image: drFinkleshitzImg, category: "other" },
  { id: "guy-unknown", name: "Guy?", image: mysteryImg, category: "other" },
];
