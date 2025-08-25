import { features } from "../assets/utils";

export const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-bg/30 border-t border-border">
      <div className="w-3/5 mx-auto flex flex-col items-center border-x border-border justify-between">
        <div className="h-full w-full p-20 flex">
          <div className="w-1/3 px-10 flex justify-evenly mb-auto flex-col gap-4 pr-20">
            <div className="font-inter font-extrabold bg-gradient-to-b from-shade-3 to-shade-4 bg-clip-text text-transparent text-7xl">
              Vakil
            </div>
            <div className="text-primary-text text-md leading-relaxed">
              Vakil (वकील): An AI that makes legal documents simple and clear.
            </div>
          </div>
          <div className="w-2/3 flex justify-evenly">
            <div className="flex flex-col gap-10">
              <div className="text-black font-semibold">Product</div>
              <ul className="flex flex-col gap-3">
                {features.map((item, i) => {
                  return (
                    <li
                      className="text-sm cursor-pointer hover:text-primary"
                      key={i}
                      onClick={() => {
                        document
                          .getElementById(item.title.replace(/\s+/g, "-"))
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                      }}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* <div className="w-1/3 flex flex-col gap-10">
              <div className="text-black font-semibold">Uses Cases</div>
              <ul className="flex flex-col gap-3 max-w-1/3">
                {useCases.map((item, i) => {
                  return (
                    <li
                      className="text-sm cursor-pointer hover:text-primary"
                      key={i}
                      onClick={() => {
                        document
                          .getElementById(item.title.replace(/\s+/g, "-"))
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                      }}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div> */}
            <div className="flex flex-col gap-10">
              <div className="text-primary-text font-semibold">Resources</div>
              <ul className="flex flex-col gap-3">
                <li className="text-sm">Pricing</li>
                <li className="text-sm">Privacy</li>
                <li className="text-sm">Contact us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-muted-text h-20 w-full px-4 flex justify-center items-center border-t border-slate-200">
          Copyright &copy; 2025 Vakil. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
