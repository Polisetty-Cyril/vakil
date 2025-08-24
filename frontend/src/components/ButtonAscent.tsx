const textSizes: Record<number, string> = {
  1: "text-sm",
  2: "text-base",
  3: "text-lg",
  4: "text-xl",
};

export const ButtonAscent = ({
  label,
  size = 2,
}: {
  label: string;
  size?: number;
}) => {
  return (
    <button
      className={`font-semibold bg-primary text-white ${textSizes[size]} rounded hover:bg-shade-4 transition scle-100 active:scale-95 active:bg-shade-5`}
      style={{
        padding: `${Math.round(size * 0.25 * 100) / 100}rem ${Math.round(size * 0.5 * 100) / 100}rem`,
      }}
    >
      {label}
    </button>
  );
};
