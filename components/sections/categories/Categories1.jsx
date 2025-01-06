import { Palette, Code, LineChart, Layout, Users, Database, Bot, Brain } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    icon: <Palette className="w-6 h-6 text-purple-600" />,
    title: "Art & Design",
    courses: "10+ Courses"
  },
  {
    icon: <Code className="w-6 h-6 text-purple-600" />,
    title: "Web Development",
    courses: "10+ Courses"
  },
  {
    icon: <LineChart className="w-6 h-6 text-purple-600" />,
    title: "Digital Marketing",
    courses: "10+ Courses"
  },
  {
    icon: <Layout className="w-6 h-6 text-purple-600" />,
    title: "HTML CSS",
    courses: "10+ Courses"
  },
  {
    icon: <Users className="w-6 h-6 text-purple-600" />,
    title: "Leadership",
    courses: "10+ Courses"
  },
  {
    icon: <Database className="w-6 h-6 text-purple-600" />,
    title: "Data Science",
    courses: "10+ Courses"
  },
  {
    icon: <Bot className="w-6 h-6 text-purple-600" />,
    title: "ChatGPT",
    courses: "10+ Courses"
  },
  {
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    title: "Deep Learning",
    courses: "10+ Courses"
  }
]

function Categories1() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-purple-600 font-medium mb-3">CATEGORIES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore 1500+ Free Education Courses
          </h2>
          <p className="text-muted-foreground">
            Discover a world of knowledge and opportunities with our online education platform pursue a new career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-shadow duration-200"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-50 group-hover:bg-purple-100 transition-colors duration-200">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.courses}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories1;