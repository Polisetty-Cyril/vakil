import { ButtonAscent } from "./ButtonAscent";
import { ButtonWhite } from "./ButtonWhite";

export const Appbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white/70 text-black flex items-center px-[20%] border-b border-gray-200 backdrop-blur-sm justify-between">
      <nav className="flex items-center gap-8">
        <div className="text-purple-600 font-inter font-bold text-2xl">
          Vakil
        </div>
        <ul className="flex items-center gap-4 font-medium">
          <li className="px-4 py-2 hover:bg-purple-50 rounded-sm hover:text-purple-400">
            Product
          </li>
          <li className="px-4 py-2 hover:bg-purple-50 rounded-sm hover:text-purple-400">
            Use cases
          </li>
          <li className="px-4 py-2 hover:bg-purple-50 rounded-sm hover:text-purple-400">
            Pricing
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <ButtonWhite label="Sign in" />
        <ButtonAscent label="Try me" />
      </div>
    </header>
  );
};
