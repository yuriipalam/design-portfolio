import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex h-[80vh] max-w-2xl flex-grow flex-col items-start justify-center">
        <Typography variant="h1" className="mb-2">
          Ademi Syrgabaeva
        </Typography>
        <Typography variant="h4" className="mb-8">
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
      <div className="">
        <Image
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
