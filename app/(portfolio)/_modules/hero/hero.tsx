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
    <div className="flex flex-col-reverse items-center gap-8 max-xl:mb-24 xl:flex-row xl:justify-between xl:gap-5">
      <div className="flex max-w-2xl flex-grow flex-col items-start justify-center xl:h-[80vh]">
        <Typography variant="h1" className="mb-2">
          {props.profile.name}
        </Typography>
        <Typography variant="h2" className="mb-8 text-lg">
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
      <div className="max-xl:max-w-[400px]">
        <Image
          priority
          src={props.profile.pictureUrl}
          width={500}
          height={500}
          alt={props.profile.name + " profile picture"}
        />
      </div>
    </div>
  );
}

export { Hero };
