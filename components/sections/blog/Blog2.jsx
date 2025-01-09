"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const categories = [
  "All",
  "Interviews",
  "Inspiration",
  "Updates",
]

const posts = [
  {
    author: {
      name: "Alexandra Moore",
      image: "https://www.shadcnblocks.com/images/block/avatar-1.webp"
    },
    title: "Simple's system for tracking and validating web forms",
    description: "In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking system, and describe how teams at Simple interact with the data quality metrics that underlie our design builder network."
  },
  {
    author: {
      name: "Mark Crupper",
      image: "https://www.shadcnblocks.com/images/block/avatar-2.webp"
    },
    title: "Introducing AI SDK 3.0 with UI support",
    description: "In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking system, and describe how teams at Simple interact with the data quality metrics that underlie our design builder network."
  },
  {
    author: {
      name: "Alexandra Moore",
      image: "https://www.shadcnblocks.com/images/block/avatar-3.webp"
    },
    title: "8 ways to improve feature adoption (includes strategies)",
    description: "In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking system, and describe how teams at Simple interact with the data quality metrics that underlie our design builder network."
  },
  {
    author: {
      name: "Mark Crupper",
      image: "https://www.shadcnblocks.com/images/block/avatar-4.webp"
    },
    title: "How to migrate to serverless hosting",
    description: "In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking system, and describe how teams at Simple interact with the data quality metrics that underlie our design builder network."
  },
  {
    author: {
      name: "Alexandra Moore",
      image: "https://www.shadcnblocks.com/images/block/avatar-5.webp"
    },
    title: "Creating a robust platform for documentation with Simple",
    description: "In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking system, and describe how teams at Simple interact with the data quality metrics that underlie our design builder network."
  },
  {
    author: {
      name: "Mark Crupper",
      image: "https://www.shadcnblocks.com/images/block/avatar-6.webp"
    },
    title: "How Simple helps xWeb manage over 4K sites",
    description: "In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking system, and describe how teams at Simple interact with the data quality metrics that underlie our design builder network."
  },
  {
    author: {
      name: "Alexandra Moore",
      image: "https://www.shadcnblocks.com/images/block/avatar-1.webp"
    },
    title: "Optimizing performance for over 6M monthly visitors",
    description: "In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking system, and describe how teams at Simple interact with the data quality metrics that underlie our design builder network."
  },
  {
    author: {
      name: "Mark Crupper",
      image: "https://www.shadcnblocks.com/images/block/avatar-2.webp"
    },
    title: "Revolutionizing video editing on the web with Simple",
    description: "In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking system, and describe how teams at Simple interact with the data quality metrics that underlie our design builder network."
  }
]

function Blog2() {
  
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="py-32">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 text-center mb-12">
          <h1 className="text-4xl font-bold">The Simple blog</h1>
          <p className="text-muted-foreground">
            Content for developers, product, and digital experts.
          </p>
        </div>

        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="w-full justify-start overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveTab(category)}
                className="text-sm"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={index}>
              {index > 0 && <Separator className="mb-8" />}
              <article className="group space-y-4 pl-9 border-l-2 border-gray-100 transition-colors duration-500 hover:border-blue-600">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={post.author.image} alt={post.author.name} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">
                    {post.author.name}
                  </span>
                </div>
                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">
                  {post.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-blue-600">
                  Read more →
                </Button>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="min-w-[200px]">
            Load more
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog2;