import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const people = [
  {
    id: "person-1",
    name: "Mohamed Ibrahim",
    role: "Software Engineer",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
  },
  {
    id: "person-2",
    name: "John Doe",
    role: "Full Stack Developer",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
  },
  {
    id: "person-3",
    name: "Ahmed Mohamedd",
    role: "Software Engineer",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
  },
  {
    id: "person-4",
    name: "Steven Smith",
    role: "Product Manager",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
  },
  {
    id: "person-5",
    name: "Sarah Smith",
    role: "Designer",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-5.webp",
  },
  {
    id: "person-6",
    name: "Ahmed Ibrahim",
    role: "Engineer",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-6.webp",
  },
  {
    id: "person-7",
    name: "George Smith",
    role: "Vice President",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-7.webp",
  },
  {
    id: "person-8",
    name: "Elizabeth Smith",
    role: "Marketing Manager",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-8.webp",
  },
];

const Team2 = () => {
  return (
    <section className="py-32">
      <div className=" container mx-auto ">
        <div className="flex flex-col items-start mb-12">
          <Badge variant="outline">Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold my-2">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Discover a world of knowledge and opportunities with our online
            education platform pursue a new career.
          </p>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {people.map((person) => (
            <div
              key={person.id}
              className="flex flex-col items-start shadow-md border rounded-md px-4 pt-4 pb-12 relative"
            >
              <Avatar className="mb-4 size-20 md:mb-5 lg:size-24">
                <AvatarImage src={person.avatar} />
                <AvatarFallback>{person.name}</AvatarFallback>
              </Avatar>
              <p className="font-medium">{person.name}</p>
              <p className="text-muted-foreground">{person.role}</p>
              <p className="py-3 text-sm text-muted-foreground">
                {person.description}
              </p>
              <div className="mt-2 flex gap-4 absolute bottom-4 left-4">
                <a href="#">
                  <FaGithub className="size-5 text-muted-foreground" />
                </a>
                <a href="#">
                  <FaLinkedin className="size-5 text-muted-foreground" />
                </a>
                <a href="#">
                  <FaDribbble className="size-5 text-muted-foreground" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team2;
