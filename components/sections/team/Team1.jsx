import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const people = [
  {
    id: "person-1",
    name: "Name",
    role: "Role",
    avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
  },
  {
    id: "person-2",
    name: "Name",
    role: "Role",
    avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
  },
  {
    id: "person-3",
    name: "Name",
    role: "Role",
    avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
  },
  {
    id: "person-4",
    name: "Name",
    role: "Role",
    avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
  },
  {
    id: "person-5",
    name: "Name",
    role: "Role",
    avatar: "https://shadcnblocks.com/images/block/avatar-5.webp",
  },
  {
    id: "person-6",
    name: "Name",
    role: "Role",
    avatar: "https://shadcnblocks.com/images/block/avatar-6.webp",
  },
  {
    id: "person-7",
    name: "Name",
    role: "Role",
    avatar: "https://shadcnblocks.com/images/block/avatar-7.webp",
  },
  {
    id: "person-8",
    name: "Name",
    role: "Role",
    avatar: "https://shadcnblocks.com/images/block/avatar-8.webp",
  },
];

const Team1 = () => {
  return (
    <section className="py-32">
      <div className=" container mx-auto">
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline">We&apos;re hiring</Badge>
          <h2 className="text-3xl md:text-4xl font-bold my-2">Meet Our Team</h2>
          <p className="text-muted-foreground lg:text-lg max-w-3xl">
            Discover a world of knowledge and opportunities with our online
            education platform pursue a new career.
          </p>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {people.map((person) => (
            <div key={person.id} className="flex flex-col items-center">
              <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
                <AvatarImage src={person.avatar} />
                <AvatarFallback>{person.name}</AvatarFallback>
              </Avatar>
              <p className="text-center font-medium">{person.name}</p>
              <p className="text-center text-muted-foreground">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team1;
