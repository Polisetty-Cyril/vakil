export const ButtonWhite = ({ label }: { label: string }) => {
  return (
    <button className="font-semibold bg-gray-50 border border-slate-200 text-purple-600 px-4 py-2 rounded hover:bg-purple-400/25 transition scale-100 active:scale-95 active:bg-purple-400/50">
      {label}
    </button>
  );
};
