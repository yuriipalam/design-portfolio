import { Typography } from "@/app/_ui/typography";
import { Button } from "@/app/_ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col-reverse items-center gap-8 max-xl:mb-24 xl:flex-row xl:justify-between xl:gap-5">
      <div className="flex max-w-2xl flex-grow flex-col items-start justify-center xl:h-[80vh]">
        <Typography variant="h1" className="mb-2">
          Ademi Syrgabaeva
        </Typography>
        <Typography variant="h2" className="mb-8 text-lg">
          UI/UX Designer, Computer Science student at ELTE
        </Typography>
        <Typography variant="p" className="mb-4 text-sm">
          As a dedicated and passionate UX/Ul designer with three years of
          hands-on experience, Iam currently studying at Eötvös Loránd
          University. I thrive on the intersection of functionality and
          aesthetics, consistently striving to create designs that not only
          captivate visually but also enhance user experiences.
        </Typography>
        <Button>See my projects</Button>
      </div>
      <div className="max-xl:max-w-[400px]">
        <Image
          priority
          src="/images/ademi.png"
          width={500}
          height={500}
          alt="Ademi Syrgabaeva"
        />
      </div>
    </div>
  );
}

export default Hero;
