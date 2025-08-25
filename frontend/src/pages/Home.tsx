import { ButtonAscent } from "../components/ButtonAscent";
import { ButtonWhite } from "../components/ButtonWhite";
import { Cards } from "../components/Cards";
import { Typewriter } from "../components/Typewriter";

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 w-3/5 py-20 px-20 bg-gradient-to-b flex flex-col items-center from-gray-100 to-white border-x border-gray-200">
        <div className="text-black text-6xl mt-20 font-inter font-bold text-center">
          <Typewriter
            text="Shady clauses? Vakil sees through it."
            twProps="font-bold text-center text-black font-inter text-6xl"
          />
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
      <div className="w-full bg-bg border-t border-border flex justify-center">
        <div className="w-3/5 h-full border-x border-border flex py-20 px-20">
          <div className="w-2/5 font-plus text-3xl text-black leading-relaxed font-semibold flex flex-col gap-20 py-30 pr-20">
            <p>Legal documents shouldn’t feel like a trap.</p>
            <p>
              Our AI-powered platform transforms dense, jargon-heavy agreements
              into clear guidance you can understand and act upon.
            </p>
          </div>
          <div className="overflow-auto max-h-[800px] py-10 px-4">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}
