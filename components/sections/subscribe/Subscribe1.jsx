const { Button } = require("@/components/ui/button");
import { Mail, Edit } from "lucide-react";

const Subscribe1 = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="relative overflow-hidden p-12 shadow-md border rounded-md">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex flex-col gap-4 w-2/3">
              <h3 className="text-2xl font-bold z-20">Explore a job now!</h3>
              <p className="text-muted-foreground text-sm md:text-lg z-20">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 30000+
                companies worldwide.
              </p>
            </div>
            <div className="flex gap-5 items-center z-20">
              <Button>Subscribe</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="absolute top-5 start-5">
            <Mail className="lg:text-[150px] size-24 text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45" />
          </div>
          <div className="absolute bottom-5 end-5">
            <Edit className="lg:text-[150px] size-24 text-black/5 dark:text-white/5 rtl:-rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe1;