"use client"

import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Play } from 'lucide-react'

const faqs = [
  {
    question: "How does it work ?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
  },
  {
    question: "Do I need a designer to use Jobstack ?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
  },
  {
    question: "What do I need to do to start selling ?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
  }
]

function Faq3() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://shadcnblocks.com/images/block/placeholder-dark-1.svg"
                alt="Professional woman celebrating"
                width={600}
                height={800}
                className="w-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-50">
                <div className="bg-purple-600 rounded-full p-4 cursor-pointer transition-transform hover:scale-110">
                  <Play className="w-8 h-8 text-white" fill="currentColor" />
                </div>
              </div>
              {/* Thumbnail overlay */}
              <div className="absolute -bottom-12 -right-12 w-72 h-72 rounded-2xl overflow-hidden border-8 border-white shadow-lg">
                <Image
                  src="https://shadcnblocks.com/images/block/placeholder-dark-2.svg"
                  alt="Professional woman with laptop"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq3;