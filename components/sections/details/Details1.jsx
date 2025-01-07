import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Signal,
  BookOpen,
  HelpCircle,
  Users,
  Play,
  ShoppingCart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const curriculum = [
  {
    title: "Introductions",
    lessons: [
      { id: 1, title: "Lesson 1", isFree: true },
      { id: 2, title: "Lesson 2" },
      { id: 3, title: "Lesson 3" },
      { id: 4, title: "Lesson 4" },
    ],
  },
  {
    title: "Mastery",
    lessons: [
      { id: 5, title: "Lesson 5", isFree: true },
      { id: 6, title: "Lesson 6" },
      { id: 7, title: "Lesson 7" },
      { id: 8, title: "Lesson 8" },
    ],
  },
];

function Details1() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="w-3/4 mx-auto space-y-4">
            {/* Course Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://shadcnblocks.com/images/block/avatar-1.webp"
                    alt="Calvin Carlo"
                  />
                  <AvatarFallback>CC</AvatarFallback>
                </Avatar>
                <span className="font-medium">Calvin Carlo</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Become a Professional Graphic Designer
              </h1>
            </div>

            {/* Course Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 Weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Signal className="h-4 w-4" />
                <span>All Levels</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>16 Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                <span>0 Quiz</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>5 Students</span>
              </div>
              <Button
                variant="link"
                className="text-purple-600 hover:text-purple-700 p-0 h-auto font-normal"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Enroll Now
              </Button>
            </div>
          </div>

          {/* Video Thumbnail */}
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src="https://shadcnblocks.com/images/block/placeholder-dark-1.svg"
              alt="Course preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-purple-600 rounded-full p-4 cursor-pointer transition-transform hover:scale-110">
                <Play className="w-8 h-8 text-white" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="w-3/4 mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Overview</h2>
            <p className="text-muted-foreground py-1">
              Ooh, name it after me! Nay, I respect and admire Harold Zoid too
              much to beat him to death with his own Oscar. Why would I want to
              know that? What's with you kids? Every other day it's food, food,
              food. Alright, I'll get you some stupid food.
            </p>
            <p className="text-muted-foreground py-1">
              It's a T. It goes “tuh”. You seem malnourished. Are you suffering
              from intestinal parasites? I suppose I could part with 'one' and
              still be feared… And I'd do it again! And perhaps a third time!
              But that would be it.
            </p>
            <p className="text-muted-foreground py-1">
              I'm just glad my fat, ugly mama isn't alive to see this day. I can
              explain. It's very valuable. I barely knew Philip, but as a
              clergyman I have no problem telling his most intimate friends all
              about him.
            </p>
            <p className="text-muted-foreground py-1">
              Bender, we're trying our best. Kif might! You can crush me but you
              can't crush my spirit! Kif, I have mated with a woman. Inform the
              men. I'm Santa Claus!
            </p>
            <p className="text-muted-foreground py-1">
              What are you hacking off? Is it my torso?! 'It is!' My precious
              torso! You, a bobsleder!? That I'd like to see! And I'd do it
              again! And perhaps a third time! But that would be it. My fellow
              Earthicans, as I have explained in my book 'Earth in the Balance”,
              and the much more popular ”Harry Potter and the Balance of Earth',
              we need to defend our planet against pollution. Also dark wizards.
            </p>
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"
              alt="placeholder"
              className="w-full h-auto object-cover"
            />
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Curriculum</h3>
              {curriculum.map((section, index) => (
                <>
                  <h4 className="text-xl font-bold">{section.title}</h4>
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1">
                        <div className="px-6 py-3 bg-muted/50">
                          <div className="grid grid-cols-2">
                            <div className="font-medium">Lessons</div>
                            <div className="font-medium text-right">Time</div>
                          </div>
                        </div>
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div key={lesson.id}>
                            {lessonIndex > 0 && <Separator />}
                            <div className="px-6 py-4">
                              <div className="grid grid-cols-2 items-center">
                                <div>{lesson.title}</div>
                                <div className="flex justify-end">
                                  {lesson.isFree && (
                                    <Button
                                      variant="ghost"
                                      className="h-8 px-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                                    >
                                      Watch Free
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details1;
