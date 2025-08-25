import { features, useCases } from "../assets/utils";

const colors: Record<string, string> = {
  purple: "from-purple-600 to-purple-950",
  blue: "from-blue-600 to-blue-950",
  pink: "from-pink-600 to-pink-950",
  red: "from-red-600 to-red-950",
};

export const Cards = () => {
  const cards = features.map((feature, i) => {
    return i % 2 == 0 ? (
      <div id={feature.title.replace(/\s+/g, "-")} key={i}>
        <CardAscent
          key={i}
          text={feature.description}
          heading={feature.title}
          color={Object.keys(colors)[i / 2]}
        />
      </div>
    ) : (
      <div id={feature.title.replace(/\s+/g, "-")} key={i}>
        <CardWhite key={i} text={feature.description} heading={feature.title} />
      </div>
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

export const UseCaseCards = () => {
  const cards = useCases.map((use, i) => {
    return (
      <div id={use.title.replace(/\s+/g, "-")} key={i}>
        <CardAscent
          key={i}
          text={use.description}
          heading={use.title}
          color={Object.keys(colors)[i % 4]}
          size={7}
          ratio={13 / 20}
        />
      </div>
    );
  });
  return <div className="flex items-center overflow-x-auto">{cards}</div>;
};

const CardAscent = ({
  heading,
  text,
  color = "purple",
  size = 4,
  ratio = 4 / 5,
}: {
  heading?: string;
  text?: string;
  color?: keyof typeof colors;
  size?: number;
  ratio?: number;
}) => {
  return (
    <div
      className={`scale-95 hover:scale-100 shadow-gray-300 transition-transform gap-12 flex-col py-10 px-6 shadow-lg text-4xl bg-gradient-to-t ${colors[color]} text-white font-plus font-semibold flex justify-center items-center`}
      style={{ height: `${5 * size}` + "rem", aspectRatio: ratio }}
    >
      <div className="font-plus text-3xl">{heading}</div>
      <div className="font-plus text-base font-light leading-loose">{text}</div>
    </div>
  );
};

const CardWhite = ({
  text,
  heading,
  size = 4,
  ratio = 4 / 5,
}: {
  text?: string;
  heading?: string;
  size?: number;
  ratio?: number;
}) => {
  return (
    <div
      className={`scale-95 hover:scale-100 transition-transform ease-in shadow-gray-300 gap-12 flex-col shadow-lg bg-white text-black py-10 px-6 font-plus font-semibold flex justify-center items-center`}
      style={{ height: `${5 * size}` + "rem", aspectRatio: ratio }}
    >
      <div className="font-plus text-3xl">{heading}</div>
      <div className="font-plus text-base font-light leading-loose">{text}</div>
    </div>
  );
};
