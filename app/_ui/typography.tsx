import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl sm:text-5xl font-semibold tracking-tight lg:text-6xl",
      h2: "scroll-m-20 text-3xl font-normal tracking-tight",
      h3: "scroll-m-20 text-2xl font-normal tracking-tight",
      h4: "scroll-m-20 text-xl font-normal tracking-tight",
      p: "leading-7"
    }
  },
  defaultVariants: {
    variant: "p"
  }
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(({ className, variant, asChild = false, ...props }, ref) => {
  let Comp: any = "p"; // Default to paragraph
  if (!asChild) {
    switch (
      variant // Assuming variant is directly mapping to the desired HTML tag
    ) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
        Comp = variant;
        break;
      default:
        Comp = "p"; // Fallback to paragraph
    }
  } else {
    Comp = Slot; // Use Slot for asChild
  }
  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});
Typography.displayName = "Typography";

export { Typography, typographyVariants };
