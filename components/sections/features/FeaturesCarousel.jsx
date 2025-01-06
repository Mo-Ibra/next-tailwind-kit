import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Shadcn UI",
    imageUrl: "https://shadcnblocks.com/images/block/logos/shadcn-ui-small.svg",
    description:
      "Shadcn UI is a modern component library that streamlines the development of user interfaces.",
    features: [
      {
        title: "Component Variety",
        description:
          "Shadcn UI provides a diverse set of components tailored for modern web applications, enhancing development speed.",
      },
      {
        title: "Customizability",
        description:
          "The library allows extensive customization options, enabling developers to create unique designs without constraints.",
      },
      {
        title: "Accessibility Focus",
        description:
          "Shadcn UI emphasizes accessibility, ensuring that components are usable for all users, including those with disabilities.",
      },
    ],
  },
  {
    title: "Figma",
    imageUrl: "https://www.shadcnblocks.com/images/block/logos/figma-icon.svg",
    description:
      "Figma is a collaborative interface design tool that empowers teams to create and prototype.",
    features: [
      {
        title: "Real-Time Collaboration",
        description:
          "Figma enables multiple users to work on designs simultaneously, making it ideal for team projects.",
      },
      {
        title: "Prototyping Capabilities",
        description:
          "It offers powerful prototyping tools that allow designers to create interactive mockups for user testing.",
      },
      {
        title: "Designing Components",
        description:
          "Figma provides powerful tools for designing and building reusable components, enhancing collaboration and consistency across designs.",
      },
    ],
  },
  {
    title: "Tailwind",
    description:
      "Tailwind CSS is a utility-first CSS framework that enables developers to build custom designs.",
    imageUrl: "https://www.shadcnblocks.com/images/block/logos/tailwind-small.svg",
    features: [
      {
        title: "Utility-First Approach",
        description:
          "Tailwind CSS promotes a utility-first approach, allowing developers to apply styles directly in their markup for rapid development.",
      },
      {
        title: "Responsive Design Made Easy",
        description:
          "It simplifies responsive design with built-in classes that adapt to different screen sizes effortlessly.",
      },
      {
        title: "Customization Flexibility",
        description:
          "Tailwind CSS offers extensive customization options, enabling developers to create unique designs without writing additional CSS.",
      }
    ],
  },
  {
    title: "Shadcn UI",
    imageUrl: "https://shadcnblocks.com/images/block/logos/shadcn-ui-small.svg",
    description:
      "Shadcn UI is a modern component library that streamlines the development of user interfaces.",
    features: [
      {
        title: "Component Variety",
        description:
          "Shadcn UI provides a diverse set of components tailored for modern web applications, enhancing development speed.",
      },
      {
        title: "Customizability",
        description:
          "The library allows extensive customization options, enabling developers to create unique designs without constraints.",
      },
      {
        title: "Accessibility Focus",
        description:
          "Shadcn UI emphasizes accessibility, ensuring that components are usable for all users, including those with disabilities.",
      },
    ],
  },
];

function FeaturesCarousel() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-6">
          <h2 className="text-4xl font-bold">
            Move faster, features for everyone
          </h2>
          <p className="text-muted-foreground text-lg mt-2">
            You can do it. You can acheive it.
          </p>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="py-4">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="mb-6 flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <img
                              src={feature.imageUrl}
                              alt="logo"
                              className="h-7"
                            />
                            <h3 className="text-xl font-semibold">
                              {feature.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-blue-500 hover:text-blue-700"
                        >
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                      <div className="space-y-4 mt-8">
                        {feature.features.map((item, itemIndex) => (
                          <div key={itemIndex} className="space-y-1">
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        ))}
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
}

export default FeaturesCarousel;
