import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Hero2 = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
              <h1 className="text-3xl font-extrabold lg:text-6xl">
                A Collection of Components Built With Shadcn & Tailwind
              </h1>
              <p className="text-balance text-muted-foreground lg:text-lg">
                Finely crafted components built with React, Tailwind and Shadcn
                UI. Developers can copy and paste these blocks directly into
                their project.
              </p>
            </div>
            <Button size="lg" className="mt-10">
              Discover all components
            </Button>
            <div className="mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
              <span className="mx-4 inline-flex items-center -space-x-4">
                <Avatar className="size-14 border">
                  <AvatarImage
                    src="https://shadcnblocks.com/images/block/avatar-1.webp"
                    alt="placeholder"
                  />
                </Avatar>
                <Avatar className="size-14 border">
                  <AvatarImage
                    src="https://shadcnblocks.com/images/block/avatar-2.webp"
                    alt="placeholder"
                  />
                </Avatar>
                <Avatar className="size-14 border">
                  <AvatarImage
                    src="https://shadcnblocks.com/images/block/avatar-3.webp"
                    alt="placeholder"
                  />
                </Avatar>
                <Avatar className="size-14 border">
                  <AvatarImage
                    src="https://shadcnblocks.com/images/block/avatar-4.webp"
                    alt="placeholder"
                  />
                </Avatar>
                <Avatar className="size-14 border">
                  <AvatarImage
                    src="https://shadcnblocks.com/images/block/avatar-5.webp"
                    alt="placeholder"
                  />
                </Avatar>
              </span>
              <div>
                <div className="flex items-center gap-1">
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">5.0</span>
                </div>
                <p className="text-left font-medium text-muted-foreground">
                  from 200+ reviews
                </p>
              </div>
            </div>
          </div>
          <img
            src="https://shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder hero"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;