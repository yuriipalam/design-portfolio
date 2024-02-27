"use client";

import { Typography } from "@/app/(portfolio)/_ui/typography";
import { Button } from "@/app/(portfolio)/_ui/button";
import Image from "next/image";
import { ProfileType } from "@/app/(portfolio)/_entities/profile/model";

interface HeroProps {
  profile: ProfileType;
}

function Hero(props: HeroProps) {
  return (
    <div className="flex flex-col-reverse items-center gap-8 xl:container max-xl:mb-24 xl:flex-row xl:justify-between xl:gap-5">
      <div className="container flex max-w-2xl flex-grow flex-col items-start justify-center xl:h-[80vh]">
        <Typography variant="h1" className="mb-2">
          {props.profile.name}
        </Typography>
        <Typography variant="h2" className="mb-8 text-lg sm:text-xl">
          {props.profile.role}
        </Typography>
        <Typography variant="p" className="mb-4 text-sm">
          {props.profile.description}
        </Typography>
        <Button
          onClick={() => {
            window.scrollTo({
              top: document.body.querySelector("#projects")?.clientHeight,
              behavior: "smooth"
            });
          }}
        >
          See my projects
        </Button>
      </div>
      <div className="relative h-[550px] w-[550px] max-xl:overflow-hidden xl:h-[600px] xl:w-[600px]">
        <Image
          priority
          width={500}
          height={500}
          src="/hero-avatar-background.svg"
          alt="Hero avatar background"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-xl:max-h-[450px] max-xl:max-w-[450px]"
        />
        <Image
          priority
          src={props.profile.pictureUrl}
          quality={100}
          width={600}
          height={600}
          alt={props.profile.name + " profile picture"}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 max-xl:max-h-[500px] max-xl:max-w-[500px] "
        />
      </div>
    </div>
  );
}

export { Hero };
