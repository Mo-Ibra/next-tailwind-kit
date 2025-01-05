import { ArrowDownRight } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const Hero1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              New Release
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Welcome to Our Website
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">Primary Button</Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Secondary Button
                <ArrowDownRight className="ml-2 size-4" />
              </Button>
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

export const Hero7 = () => {
  return (
    <section className="py-32">
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            A Collection of Components Built With Shadcn & Tailwind
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            Finely crafted components built with React, Tailwind and Shadcn UI.
            Developers can copy and paste these blocks directly into their
            project.
          </p>
        </div>
        <Button size="lg" className="mt-10">
          Discover all components
        </Button>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
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
    </section>
  );
};

export const Hero12 = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container">
        <div className="magicpattern absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-6 text-center">
            <img src="https://shadcnblocks.com/images/block/block-1.svg" alt="logo" className="h-16" />
            <Badge variant="outline">UI Blocks</Badge>
            <div>
              <h1 className="mb-6 text-pretty text-2xl font-bold lg:text-5xl">
                Build your next project with Blocks
              </h1>
              <p className="text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Button>Get Started</Button>
              <Button variant="outline">
                Learn more <ExternalLink className="ml-2 h-4" />
              </Button>
            </div>
            <div className="mt-20 flex flex-col items-center gap-4">
              <p className="text-center: text-muted-foreground lg:text-left">
                Built with open-source technologies
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="https://shadcnblocks.com/images/block/logos/shadcn-ui-small.svg"
                    alt="company logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="https://shadcnblocks.com/images/block/logos/typescript-small.svg"
                    alt="company logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>

                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="https://shadcnblocks.com/images/block/logos/react-icon.svg"
                    alt="company logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="https://shadcnblocks.com/images/block/logos/tailwind-small.svg"
                    alt="company logo"
                    className="h-4 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};