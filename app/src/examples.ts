import leetcodeSkillTree from "./examples/leetcode-skill-tree.yaml?raw";
import programmingFamilyTree from "./examples/programming-family-tree.yaml?raw";
import stellarEvolution from "./examples/stellar-evolution.yaml?raw";
import cholera1854 from "./examples/cholera-1854.yaml?raw";
import firstFlight from "./examples/first-flight.yaml?raw";
import birthOfInternet from "./examples/birth-of-internet.yaml?raw";
import unravelingDna from "./examples/unraveling-dna.yaml?raw";
import jackTheRipper from "./examples/jack-the-ripper.yaml?raw";
import worldWar2 from "./examples/world-war-2.yaml?raw";
import evolutionOfLlms from "./examples/evolution-of-llms.yaml?raw";

export const examples: { name: string; yaml: string }[] = [
  { name: "CS: The LeetCode Skill Tree", yaml: leetcodeSkillTree },
  { name: "Tech: Programming Family Tree", yaml: programmingFamilyTree },
  { name: "Science: Stellar Evolution", yaml: stellarEvolution },
  { name: "Science: Cholera (1854)", yaml: cholera1854 },
  { name: "History: The First Flight", yaml: firstFlight },
  { name: "History: Birth of the Internet", yaml: birthOfInternet },
  { name: "Science: Unraveling DNA", yaml: unravelingDna },
  { name: "Mystery: Jack the Ripper", yaml: jackTheRipper },
  { name: "History: World War II", yaml: worldWar2 },
  { name: "AI: Evolution of LLMs", yaml: evolutionOfLlms },
];
