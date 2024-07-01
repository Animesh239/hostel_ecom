
// import { useLanguage } from "../hooks/useLanguage";d:\stup\hostel_swap\pages\blank.tsx
import Image from "next/image";

const About = () => {
  // const { t, locale } = useLanguage();
  return (
    <div className="flex w-full xl:max-w-[2100px] mx-auto">
      <div className="w-full lg:w-1/2 mt-8 md:mt-0 px-4 sm:px-8 md:px-0">
        <p className="leading-8 md:text-justify">{"aboutLongText"}</p>
        <br />
        <p className="my-4">{"aboutEnjoy"}</p>
        <p>{"myName"}</p>
      </div>
      <div className="hidden md:block flex-grow text-center">
        <Image
          src="/images/about-me.svg"
          alt="about me"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default About;
