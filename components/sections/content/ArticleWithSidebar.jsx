import {
  FiRefreshCw,
  FiImage,
  FiCheckSquare,
  FiUmbrella,
} from "react-icons/fi";
import { Badge } from "@/components/ui/badge";

const ArticleWithSidebar = () => {
  const links = [
    { id: "section1", label: "Introduction" },
    { id: "section2", label: "Overview" },
    { id: "section3", label: "Features" },
    { id: "section4", label: "Conclusion" },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Content */}
          <div className="col-span-3">
            <Badge variant="outline" className="mb-4">
              Kingdom Tales
            </Badge>
            <h1 className="text-4xl font-bold mb-4">The Great Joke Tax</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              In a kingdom far away, where laughter once flowed freely, a
              peculiar tale unfolded about a king who decided to tax the very
              essence of joy itself - jokes and jest.
            </p>
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
              alt="Article Thumbnail"
              className="mb-8 rounded-md"
            />
            <article>
              <section id="section1" className="prose mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  How the Tax System Works
                </h2>
                <div className="ml-3.5">
                  <div className="relative flex items-start pb-2">
                    <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                    <div className="absolute ml-[-14px] py-2">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <FiRefreshCw className="h-4 w-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="pl-12">
                      <h3 className="mt-2 text-base font-semibold">
                        Registering Your Jokes
                      </h3>
                      <p>
                        All citizens must register their jokes at the Royal Jest
                        Office. Each joke is carefully cataloged and assigned a
                        tax bracket based on its humor level.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start pb-2">
                    <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                    <div className="absolute ml-[-14px] py-2">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <FiImage className="h-4 w-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="pl-12">
                      <h3 className="mt-2 text-base font-semibold">
                        Classification Process
                      </h3>
                      <p>
                        The Royal Jesters evaluate each joke based on wit,
                        delivery, and audience reaction. Higher ratings mean
                        higher taxes, making the finest jokes a luxury few can
                        afford.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start pb-2">
                    <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                    <div className="absolute ml-[-14px] py-2">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <FiCheckSquare className="h-4 w-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="pl-12">
                      <h3 className="mt-2 text-base font-semibold">
                        Tax Collection
                      </h3>
                      <p>
                        Royal tax collectors roam the streets, listening for
                        laughter. Anyone caught telling an unregistered joke
                        faces steep fines or time in the kingdom's least amusing
                        dungeon.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="section2" className="mb-8">
                {/* Styled Heading */}
                <h2 className="text-3xl font-bold mb-4">
                  The People's Rebellion
                </h2>

                <p>
                  The people of the kingdom, feeling uplifted by the laughter,
                  started to tell jokes and puns again, and soon the entire
                  kingdom was in on the joke.
                </p>

                {/* Styled Table */}
                <div className="overflow-x-auto my-4">
                  <table className="table-auto w-full border-collapse border border-gray-200 rounded-lg shadow-sm">
                    <thead className="bg-indigo-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium">
                          King's Treasury
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium">
                          People's Happiness
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-t border-gray-200">
                        <td className="px-4 py-2">Empty</td>
                        <td className="px-4 py-2">Overflowing</td>
                      </tr>
                      <tr className="bg-gray-50 border-t border-gray-200">
                        <td className="px-4 py-2">Modest</td>
                        <td className="px-4 py-2">Satisfied</td>
                      </tr>
                      <tr className="bg-white border-t border-gray-200">
                        <td className="px-4 py-2">Full</td>
                        <td className="px-4 py-2">Ecstatic</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="my-4">
                  The king, seeing how much happier his subjects were, realized
                  the error of his ways and repealed the joke tax. Jokester was
                  declared a hero, and the kingdom lived happily ever after.
                </p>

                {/* Alert Box */}
                <div
                  role="alert"
                  className="relative w-full rounded-lg border p-4"
                >
                  <div className="flex items-center">
                    <FiUmbrella className="h-6 w-6" />
                    <div className="ml-4">
                      <h5 className="mb-1 text-lg font-semibold leading-none tracking-tight">
                        Royal Decree!
                      </h5>
                      <div className="text-sm">
                        Remember, all jokes must be registered at the Royal Jest
                        Office before telling them.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="section3" className="mb-8">
                {/* Styled Heading */}
                <h2 className="text-3xl font-bold mb-4">The King's Plan</h2>

                <p className="my-4">
                  The king thought long and hard, and finally came up with
                  <a href="#" className="underline">
                    a brilliant plan
                  </a>
                  : he would tax the jokes in the kingdom.
                </p>

                {/* Styled Blockquote */}
                <blockquote className="border-l-4 pl-4 italic text-gray-600">
                  “After all,” he said, “everyone enjoys a good joke, so it's
                  only fair that they should pay for the privilege.”
                </blockquote>

                <p className="my-4">
                  The king's subjects were not amused. They grumbled and
                  complained, but the king was firm:
                </p>

                {/* Styled List */}
                <ul className="list-disc pl-6 text-gray-800 my-4 space-y-2">
                  <li>
                    <span className="font-semibold">1st level of puns:</span> 5
                    gold coins
                  </li>
                  <li>
                    <span className="font-semibold">2nd level of jokes:</span>{" "}
                    10 gold coins
                  </li>
                  <li>
                    <span className="font-semibold">
                      3rd level of one-liners:
                    </span>{" "}
                    20 gold coins
                  </li>
                </ul>

                <p className="text-muted-foreground ">
                  As a result, people stopped telling jokes, and the kingdom
                  fell into a gloom. But there was one person who refused to let
                  the king's foolishness get him down: a court jester named
                  Jokester.
                </p>
              </section>

              <section id="section4" className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
                <p>
                  In condimentum venenatis nisi, nec auctor lorem luctus sit
                  amet. Praesent euismod risus et risus luctus, nec tincidunt
                  odio consequat.
                </p>
              </section>
            </article>
          </div>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-16 self-start">
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-bold mb-4">On This Page</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-sm font-medium cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ArticleWithSidebar;
