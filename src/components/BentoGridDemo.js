import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto py-4 px-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          img={item.img}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// was written in header section in const items
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 white:from-neutral-900 white:to-neutral-800 to-neutral-100"></div>
// );

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <img
        src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eb4030662288a1c19cba4f_1.%20Tailored%20Subscriptions.svg"
        alt="grid"
        className="h-full object-cover rounded-xl"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
      <img
        src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eeaf0c4a0b7ff56cfbe1eb_2.%20Bundle%20Builder-p-500.png"
        alt="grid"
        className=" h-full object-cover rounded-xl"
      />
    ),
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <img
        src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eeaf0c4a0b7ff56cfbe1eb_2.%20Bundle%20Builder-p-500.png"
        alt="grid"
        className=" h-full object-cover rounded-xl"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <img
        src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eeaf0c4a0b7ff56cfbe1eb_2.%20Bundle%20Builder-p-500.png"
        alt="grid"
        className=" h-auto object-cover rounded-xl"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: (
      <img
        src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eeaf0c4a0b7ff56cfbe1eb_2.%20Bundle%20Builder-p-500.png"
        alt="grid"
        className=" h-full object-cover rounded-xl"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: (
      <img
        src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eeaf0c4a0b7ff56cfbe1eb_2.%20Bundle%20Builder-p-500.png"
        alt="grid"
        className=" h-full object-cover rounded-xl"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: (
      <img
        src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eeaf0c4a0b7ff56cfbe1eb_2.%20Bundle%20Builder-p-500.png"
        alt="grid"
        className=" w-35 object-cover rounded-xl"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export { BentoGridDemo };
