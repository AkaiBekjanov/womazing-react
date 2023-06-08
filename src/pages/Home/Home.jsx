import { Hero } from "./Hero/Hero";
import { Collections } from "./Collections/Collections";
import { Important } from "./Important/Important";
import { DreamTeam } from "./DreamTeam/DreamTeam";

export const Home = () => {
  return (
    <>
      <Hero />
      <Collections />
      <Important />
      <DreamTeam />
    </>
  );
};
