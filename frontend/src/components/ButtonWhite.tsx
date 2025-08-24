const textSizes: Record<number, string> = {
  1: "text-sm",
  2: "text-base",
  3: "text-lg",
  4: "text-xl",
};

export const ButtonWhite = ({
  label,
  size = 2,
}: {
  label: string;
  size?: number;
}) => {
  return (
    <button
      className={`font-semibold bg-bg border border-border text-primary rounded hover:bg-shade-3/25 transition scale-100 active:scale-95 active:bg-shade-3/50 ${textSizes[size]}`}
      style={{
        padding: `${Math.round(size * 0.25 * 100) / 100}rem ${Math.round(size * 0.5 * 100) / 100}rem`,
      }}
    >
      {label}
    </button>
  );
};
