import { features, useCases } from "../assets/utils";
import { ButtonAscent } from "./ButtonAscent";
import { ButtonWhite } from "./ButtonWhite";

export const Appbar = () => {
  return (
    <header className="z-100 fixed top-0 left-0 w-full h-16 bg-white/70 text-black flex items-center px-[20%] border-b border-border backdrop-blur-sm justify-between">
      <nav className="flex items-center gap-8 px-10">
        <div className="text-primary font-inter font-bold text-2xl">Vakil</div>
        <ul className="flex items-center gap-4 font-medium text-primary-text">
          <li className="px-4 py-2 hover:bg-shade-1 cursor-pointer rounded-sm hover:text-shade-3 relative group">
            <div className="px-4 w-60 flex flex-col bg-white shadow-gray-400 shadow-2xl py-4 absolute -translate-x-4 translate-y-15 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in rounded-sm">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 text-black hover:text-primary rounded-sm cursor-pointer"
                  onClick={() => {
                    document
                      .getElementById(feature.title.replace(/\s+/g, "-"))
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                >
                  {feature.title}
                </div>
              ))}
            </div>
            Product
          </li>
          <li className="px-4 py-2 hover:bg-shade-1 rounded-sm cursor-pointer hover:text-shade-3 group relative">
            <div className="px-4 w-60 flex flex-col bg-white shadow-gray-400 shadow-2xl py-4 absolute -translate-x-4 translate-y-15 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in rounded-sm">
              {useCases.map((use) => (
                <div
                  key={use.title}
                  className="flex items-start gap-4 p-4 text-black hover:text-primary rounded-sm cursor-pointer"
                  onClick={() => {
                    document
                      .getElementById(use.title.replace(/\s+/g, "-"))
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                >
                  {use.title}
                </div>
              ))}
            </div>
            Use cases
          </li>
          <li className="px-4 py-2 hover:bg-shade-1 cursor-pointer rounded-sm hover:text-shade-3">
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
