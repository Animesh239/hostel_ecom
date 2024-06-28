import Carousel from "@/components/carousel";
import Benefits from "@/components/Benefits";
import dynamic from "next/dynamic";


const Offers = dynamic(() => import("../components/Offers/Offers"));
const Category = dynamic(() => import("../components/category/Category"));

export default function Home() {
  return (
    <div>
      <Carousel />
      <Benefits />
      <Offers />
      <Category />
    </div>
  );
}
