import { features } from "../assets/features";

const colors: Record<string, string> = {
  purple: "from-purple-600 to-purple-950",
  blue: "from-blue-600 to-blue-950",
  red: "from-red-600 to-red-950",
  pink: "from-pink-600 to-pink-950",
};

export const Cards = () => {
  const cardFeatures = features;
  const cards = Array.from({ length: 8 }).map((_, i) => {
    return i % 2 == 0 ? (
      <CardAscent
        key={i}
        text={cardFeatures[i].description}
        heading={cardFeatures[i].title}
        color={Object.keys(colors)[i / 2]}
      />
    ) : (
      <CardWhite
        key={i}
        text={cardFeatures[i].description}
        heading={cardFeatures[i].title}
      />
    );
  });
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-10">{cards.slice(0, 4)}</div>
      <div className="flex flex-col gap-10 pt-30">
        {cards.slice(4, 8).reverse()}
      </div>
    </div>
  );
};

const CardAscent = ({
  heading,
  text,
  color = "purple",
}: {
  heading?: string;
  text?: string;
  color?: keyof typeof colors;
}) => {
  return (
    <div
      className={`w-64 h-80 scale-95 hover:scale-105 shadow-gray-300 transition-transform gap-12 flex-col py-10 px-6 shadow-lg text-4xl bg-gradient-to-t ${colors[color]} text-white font-plus font-semibold flex justify-center items-center`}
    >
      <div className="font-plus text-3xl">{heading}</div>
      <div className="font-plus text-base font-light leading-loose">{text}</div>
    </div>
  );
};

const CardWhite = ({ text, heading }: { text?: string; heading?: string }) => {
  return (
    <div
      className={`w-64 h-80 scale-95 hover:scale-105 transition-transform ease-in shadow-gray-300 gap-12 flex-col shadow-lg bg-white text-black py-10 px-6 font-plus font-semibold flex justify-center items-center`}
    >
      <div className="font-plus text-3xl">{heading}</div>
      <div className="font-plus text-base font-light leading-loose">{text}</div>
    </div>
  );
};
