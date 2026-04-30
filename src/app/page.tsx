import AnniversaryPage from "@/components/AnniversaryPage";
import { Stars } from "@/components/Stars";
import { Petals } from "@/components/Petals";
import { Confetti } from "@/components/Confetti";

export default function Home() {
  return (
    <>
      <Confetti />
      <Stars />
      <Petals />
      <AnniversaryPage />
    </>
  );
}
