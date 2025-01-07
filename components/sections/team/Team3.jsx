import Image from "next/image";

const team = [
  {
    id: 1,
    name: "Megan",
    title: "UI/Ux Expert",
    imageUrl: "https://shadcnblocks.com/images/block/avatar-1.webp",
  },
  {
    id: 2,
    name: "Mohamed Ibrahim",
    title: "Full stack developer",
    imageUrl: "https://shadcnblocks.com/images/block/avatar-2.webp",
  },
  {
    id: 3,
    name: "John Doe",
    title: "Software engineer",
    imageUrl: "https://shadcnblocks.com/images/block/avatar-3.webp",
  },
  {
    id: 4,
    name: "Steven Smith",
    title: "Product manager",
    imageUrl: "https://shadcnblocks.com/images/block/avatar-4.webp",
  }
];

const Team3 = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Discover a world of knowledge and opportunities with our online
            education platform pursue a new career.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
          {team.map((person) => (
            <div key={person.id} className="mx-auto">
              <Image
                alt="Team Image"
                src={person.imageUrl}
                width={262}
                height={314}
                className="rounded-full"
              />
              <div className="text-center my-4">
                <h3 className="text-lg font-bold cursor-pointer hover:text-violet-600 duration-500">
                  {person.name}
                </h3>
                <p className="text-gray-500 font-semibold text-lg">
                  {person.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team3;
