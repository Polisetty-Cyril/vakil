import { Appbar } from "./Appbar";
import { ButtonAscent } from "./ButtonAscent";
import { ButtonWhite } from "./ButtonWhite";
import { Cards, UseCaseCards } from "./Cards";
import { Footer } from "./Footer";
import { Typewriter } from "./Typewriter";

export function Home() {
  return (
    <div className="flex flex-col">
      <Appbar />
      <div className="flex flex-col items-center">
        <div className="mt-10 w-4/5 xl:w-3/5 py-8 lg:py-10 px-6 lg:px-20 bg-gradient-to-b flex flex-col items-center from-gray-100 to-white border-x border-gray-200">
          <div className="text-black text-6xl mt-8 lg:mt-20 font-inter font-bold text-center">
            <Typewriter
              text="Shady clauses? Vakil sees through it."
              twProps="font-bold text-center text-black font-inter text-3xl md:text-4xl lg:text-6xl"
            />
          </div>
          <div className="px-10 lg:px-40 text-primary-text text-base lg:text-lg mt-6 text-center leading-relaxed">
            Simplifies legal documents into clear, everyday language, helping
            people understand contracts, clauses, and terms with ease.
          </div>
          <div className="py-10 flex flex-col sm:flex-row gap-4">
            <ButtonWhite label="Get Started" size={2} />
            <ButtonAscent label="See How It Works" size={2} />
          </div>
        </div>
        <div className="w-full bg-bg border-t border-border flex justify-center">
          <div className="w-4/5 lg:w-3/5 h-full border-x border-border flex py-10 lg:py-20 px-5 lg:px-10 flex-col items-center md:items-stretch md:flex-row">
            <div className="w-full pb-10 md:pb-0 gap-2 text-center md:text-start md:w-4/12 xl:w-5/12 font-plus text-lg xl:text-2xl text-black leading-relaxed xl:leading-loose font-semibold flex flex-col justify-evenly py-4 lg:py-20 md:pr-7 lg:pr-10">
              <p>Legal documents shouldn’t feel like a trap.</p>
              <p>
                Our AI-powered platform transforms dense, jargon-heavy
                agreements into clear guidance you can understand and act upon.
              </p>
            </div>
            <div className="overflow-auto max-h-[800px] px-4">
              <Cards />
            </div>
          </div>
        </div>
        <div className="w-full bg-white border-t border-border flex justify-center">
          <div className="w-4/5 xl:w-3/5 h-full border-x border-border flex flex-col py-20 px-8">
            <span className="text-3xl lg:text-4xl xl:text-5xl text-black font-plus font-semibold">
              Stay informed.
            </span>
            <span className="pt-2 text-3xl lg:text-4xl xl:text-5xl text-black font-plus font-semibold">
              Keep your rights protected.
            </span>
            <p className="pt-10 text-gray-600 text-base lg:text-lg font-plus max-w-[500px]">
              From plain-language summaries to anomaly detection and guided
              actions, you can understand, contest, and resolve legal matters
              with confidence.
            </p>
            <div className="w-full mt-20 relative">
              <div className="absolute w-full bg-gradient-to-br from-white/5 to-white/10 z-10 h-full pointer-events-none"></div>
              <UseCaseCards />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
