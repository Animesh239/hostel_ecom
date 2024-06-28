import Carousel from "@/components/carousel";
import Benefits from "@/components/Benefits";
import dynamic from "next/dynamic";


const Offers = dynamic(() => import("../components/Offers/Offers"));
const Category = dynamic(() => import("../components/category/Category"));
const Newest = dynamic(() => import("../components/newest/Newest"));

export default function Home() {
  return (
    <div>
      <Carousel />
      <Benefits />
      <Offers />
      <Category />
      <Newest />
    </div>
  );
}
