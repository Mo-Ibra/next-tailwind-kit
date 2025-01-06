import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, BookOpen, Users } from 'lucide-react'
import Image from "next/image"

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
      avatar: "https://www.shadcnblocks.com/images/block/avatar-1.webp"
    },
    image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg"
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
      avatar: "https://www.shadcnblocks.com/images/block/avatar-2.webp"
    },
    image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg"
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
      avatar: "https://www.shadcnblocks.com/images/block/avatar-3.webp"
    },
    image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg"
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
      avatar: "https://www.shadcnblocks.com/images/block/avatar-4.webp"
    },
    image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg"
  },
  {
    id: 5,
    title: "Front-end Development Course",
    description: "The phrasal sequence of the is now so many campaign",
    price: 24,
    lessons: 10,
    students: 49,
    instructor: {
      name: "Calvin Carlo",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-5.webp"
    },
    image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg"
  },
  {
    id: 6,
    title: "Full stack Project in Next.js Course",
    description: "The phrasal sequence of the is now so many campaign",
    price: 29,
    lessons: 10,
    students: 49,
    instructor: {
      name: "Calvin Carlo",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-6.webp"
    },
    image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg"
  }
]

function Cards1() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="outline">
                    Free
                  </Badge>
                  <Badge variant="outline">
                    Event
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge variant="primary" className="text-lg font-semibold">
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
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-muted-foreground">{course.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={course.instructor.avatar} />
                    <AvatarFallback>CC</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{course.instructor.name}</span>
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
    </section>
  )
}

export default Cards1;