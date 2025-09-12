import { features, useCases } from "@/assets/utils";

const handleScroll = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

export const Footer = () => {
  const FooterLink = ({ item }) => (
    <li
      className="text-sm text-primary-text cursor-pointer hover:text-primary"
      onClick={() => handleScroll(item.title.replace(/\s+/g, "-"))}
    >
      {item.title}
    </li>
  );

  return (
    <footer className="w-full bg-bg/30 border-t border-border">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <div className="font-inter font-extrabold text-5xl lg:text-7xl bg-gradient-to-b from-shade-3 to-shade-4 bg-clip-text text-transparent">
              Vakil
            </div>
            <p className="text-primary-text text-md leading-relaxed mt-4 max-w-xs mx-auto lg:mx-0">
              Vakil (वकील): An AI that makes legal documents simple and clear.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex flex-col gap-10">
              <h3 className="text-black font-semibold">Product</h3>
              <ul className="flex flex-col gap-3">
                {features.map((item) => (
                  <FooterLink key={item.title} item={item} />
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-10">
              <h3 className="text-black font-semibold">Use Cases</h3>
              <ul className="flex flex-col gap-3">
                {useCases.map((item) => (
                  <FooterLink key={item.title} item={item} />
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-10">
              <h3 className="text-primary-text font-semibold">Resources</h3>
              <ul className="flex flex-col gap-3">
                <li
                  className="text-sm cursor-pointer hover:text-primary"
                  onClick={() => handleScroll("pricing")}
                >
                  Pricing
                </li>
                <li className="text-sm cursor-pointer hover:text-primary">
                  Privacy
                </li>
                <li className="text-sm cursor-pointer hover:text-primary">
                  Contact us
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-muted-text mt-12 pt-8 border-t border-border">
          Copyright &copy; 2025 Vakil. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
