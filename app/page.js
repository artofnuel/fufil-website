import Image from "next/image";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Offer from "./component/Offer";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <Services />
      <Offer />
    </main>
  );
}
