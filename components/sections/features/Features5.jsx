import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

function Features5() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative group">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="Student learning with headphones"
                width={800}
                height={600}
                className="w-full object-cover"
              />
              {/* Thumbnail overlay */}
              <div className="absolute bottom-4 right-4 w-32 h-24 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                <Image
                  src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                  alt="Student studying"
                  width={150}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-purple-600 rounded-full p-4 cursor-pointer transition-transform hover:scale-110">
                  <Play className="w-8 h-8 text-white" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Access to Learning Anytime & Anyware
            </h2>
            <p className="text-muted-foreground text-lg">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for
              &apos;lorem ipsum&apos; will uncover many web sites still in their
              infancy. Various versions have evolved over the years, sometimes
              by accident, sometimes on purpose (injected humour and the like).
            </p>

            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  <span>Flexible Timing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  <span>Easy Learning</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  <span>Affordable</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  <span>World Class</span>
                </li>
              </ul>
            </div>

            <Button
              variant="secondary"
              className="bg-purple-100 hover:bg-purple-200 text-purple-600"
            >
              Learn More →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features5;