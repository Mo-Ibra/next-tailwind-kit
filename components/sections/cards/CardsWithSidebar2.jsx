"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { BookOpen, Users, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const courses = [
  {
    id: 1,
    title: "The Ultimate Course Bundle",
    description: "The phrasal sequence of the is now so many campaign",
    price: 0,
    lessons: 10,
    students: 49,
    instructor: {
      name: "Calvin Carlo",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
    },
    image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
  },
  {
    id: 2,
    title: "App Development Course",
    description: "The phrasal sequence of the is now so many campaign",
    price: 19,
    lessons: 10,
    students: 49,
    instructor: {
      name: "Calvin Carlo",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
    },
    image: "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
  },
  {
    id: 3,
    title: "Spoken English Popular Course",
    description: "The phrasal sequence of the is now so many campaign",
    price: 29,
    lessons: 10,
    students: 49,
    instructor: {
      name: "Calvin Carlo",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
    },
    image: "https://www.shadcnblocks.com/images/block/placeholder-3.svg",
  },
  {
    id: 4,
    title: "Back-end Development Course",
    description: "The phrasal sequence of the is now so many campaign",
    price: 15,
    lessons: 10,
    students: 49,
    instructor: {
      name: "Calvin Carlo",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
    },
    image: "https://www.shadcnblocks.com/images/block/placeholder-4.svg",
  },
];

const categories = [
  { id: "web-designing", label: "Web Designing", count: 3 },
  { id: "web-development", label: "Web Development", count: 7 },
  { id: "freelancing", label: "Freelancing", count: 4 },
  { id: "marketing", label: "Marketing", count: 6 },
  { id: "meditation", label: "Meditation", count: 7 },
  { id: "music", label: "Music", count: 44 },
];

const levels = [
  { id: "begining", label: "Begining" },
  { id: "intermediate", label: "Intermediate" },
  { id: "expert", label: "Expert" },
];

const CardsWithSidebar2 = () => {
  const [price, setPrice] = useState([50]);
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-3">
            {/* Left Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                      <Badge variant="outline">Free</Badge>
                      <Badge variant="outline">Event</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge
                        variant="primary"
                        className="text-lg font-semibold"
                      >
                        ${course.price}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons} Lessons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students} Students</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {course.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={course.instructor.avatar} width={32} height={32} />
                        <AvatarFallback>CC</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">
                        {course.instructor.name}
                      </span>
                    </div>
                    <Button variant="ghost" className="gap-2">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-16 self-start">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Search Course</h2>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search" className="pl-8" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold my-4">Categories</h2>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox id={category.id} />
                      <Label
                        htmlFor={category.id}
                        className="text-sm text-muted-foreground"
                      >
                        {category.label}
                      </Label>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-purple-50 text-purple-600 hover:bg-purple-100 hover:text-purple-700"
                    >
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold my-4">Pricing</h2>
              <div>
                <Slider
                  defaultValue={[50]}
                  max={120}
                  min={0}
                  step={1}
                  value={price}
                  onValueChange={setPrice}
                  className="py-4"
                />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">${price[0]}</span>
                  <span className="text-muted-foreground">$120</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold my-4">Levels</h2>
              <div className="space-y-3">
                {levels.map((level) => (
                  <div key={level.id} className="flex items-center space-x-2">
                    <Checkbox id={level.id} />
                    <Label
                      htmlFor={level.id}
                      className="text-sm text-muted-foreground"
                    >
                      {level.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CardsWithSidebar2;
