import { ButtonAscent } from "./ButtonAscent";
import { ButtonWhite } from "./ButtonWhite";

export const Appbar = () => {
  return (
    <header className="z-100 fixed top-0 left-0 w-full h-16 bg-white/70 text-black flex items-center px-[20%] border-b border-border backdrop-blur-sm justify-between">
      <nav className="flex items-center gap-8 px-10">
        <div className="text-primary font-inter font-bold text-2xl">Vakil</div>
        <ul className="flex items-center gap-4 font-medium text-primary-text">
          <li className="px-4 py-2 hover:bg-shade-1 rounded-sm hover:text-shade-3">
            Product
          </li>
          <li className="px-4 py-2 hover:bg-shade-1 rounded-sm hover:text-shade-3">
            Use cases
          </li>
          <li className="px-4 py-2 hover:bg-shade-1 rounded-sm hover:text-shade-3">
            Pricing
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4 px-10">
        <ButtonWhite label="Sign in" />
        <ButtonAscent label="Try me" />
      </div>
    </header>
  );
};
