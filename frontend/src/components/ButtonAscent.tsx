export const ButtonAscent = ({ label }: { label: string }) => {
  return (
    <button className="font-semibold bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800 transition scle-100 active:scale-95 active:bg-purple-900">
      {label}
    </button>
  );
};
