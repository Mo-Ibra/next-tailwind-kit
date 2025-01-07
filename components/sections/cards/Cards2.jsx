import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Users, ArrowRight } from 'lucide-react'

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
    image: "https://www.shadcnblocks.com/images/block/placeholder-2.svg"
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
    image: "https://www.shadcnblocks.com/images/block/placeholder-3.svg"
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
    image: "https://www.shadcnblocks.com/images/block/placeholder-4.svg"
  }
]

function Cards2() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Best Card
          </h2>
          <p className="text-muted-foreground">
            Discover a world of knowledge and opportunities with our online education platform pursue a new career.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="grid md:grid-cols-[2fr,3fr]">
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="outline" className="cursor-pointer">
                      Free
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      Event
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="text-lg font-semibold cursor-pointer">
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
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={course.instructor.avatar} />
                        <AvatarFallback>CC</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{course.instructor.name}</span>
                    </div>
                    <Button variant="ghost" className=" hover:bg-gray-50 gap-2">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards2;