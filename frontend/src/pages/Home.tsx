import { ButtonAscent } from "../components/ButtonAscent";
import { ButtonWhite } from "../components/ButtonWhite";

export function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-10 h-full w-3/5 py-20 px-20 bg-gradient-to-b flex flex-col items-center from-gray-100 to-white border-x border-gray-200">
        <div className="text-black text-6xl mt-20 font-inter font-bold text-center">
          Shady clauses? Vakil sees through.
        </div>
        <div className="px-40 text-primary-text text-lg mt-6 text-center leading-relaxed">
          Simplifies legal documents into clear, everyday language, helping
          people understand contracts, clauses, and terms with ease.
        </div>
        <div className="py-10 flex gap-4">
          <ButtonWhite label="Get Started" size={2} />
          <ButtonAscent label="See How It Works" size={2} />
        </div>
      </div>
    </div>
  );
}
