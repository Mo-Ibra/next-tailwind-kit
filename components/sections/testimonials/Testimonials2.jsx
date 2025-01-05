import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Star } from "lucide-react";

const Testimonials2 = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "Software Engineer",
      avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
      text: "This is an amazing product! It has streamlined my workflow and boosted my productivity.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      position: "Product Manager",
      avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
      text: "Highly recommend it to anyone looking for a modern and well-designed toolkit!",
      rating: 4,
    },
    {
      name: "Alex Johnson",
      position: "Freelancer",
      avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
      text: "Absolutely love it. The design is clean, and the components are easy to use.",
      rating: 5,
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <h2 className="text-center text-4xl font-bold mb-8">What People Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg"
            >
              <Avatar className="mb-2 size-12 md:size-24">
                <AvatarImage src={testimonial.avatar} />
                <AvatarFallback>{testimonial.name}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
              <p className="my-4 text-center text-gray-700">
                {testimonial.text}
              </p>
              <div className="flex">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`h-5 w-5 ${
                      starIndex < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
