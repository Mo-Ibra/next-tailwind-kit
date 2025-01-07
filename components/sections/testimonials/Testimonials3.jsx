"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "I was surprised by how interactive online courses can be. The live discussions and group projects kept me engaged, and I felt connected to my classmates.",
    author: {
      name: "Ramon Gibson",
      image: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
      role: "Student",
    },
  },
  {
    content:
      "Studying online saved me a lot of money, and I didn't have to commute. The quality of the courses was fantastic, and I could learn at my own pace.",
    author: {
      name: "Stella Robinson",
      image: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
      role: "Student",
    },
  },
  {
    content:
      "Online learning requires discipline, but it's worth it. I had to work on time management, but the flexibility and quality of the content made it rewarding.",
    author: {
      name: "Paul Phelan",
      image: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
      role: "Student",
    },
  },
  {
    content:
      "That was an amazing experience! The course was very informative, and the instructors were knowledgeable. I would definitely recommend it to my friends.",
    author: {
      name: "Mohamed Ibrahim",
      image: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
      role: "Student",
    },
  },
];

const Testimonials3 = () => {
  return (
    <section className="py-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say ?
          </h2>
          <p className="text-muted-foreground">
            Discover a world of knowledge and opportunities with our online
            education platform pursue a new career.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border-0 shadow-none">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="mb-6">
                      <p className="text-muted-foreground">
                        "{testimonial.content}"
                      </p>
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.author.image}
                          alt={testimonial.author.name}
                        />
                        <AvatarFallback>
                          {testimonial.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">
                          {testimonial.author.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.author.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials3;
