import { useEffect, useState } from "react";
import { ButtonAscent } from "./ButtonAscent";
import { ButtonWhite } from "./ButtonWhite";
import { features, useCases } from "@/assets/utils";
import { useNavigate } from "react-router-dom";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const handleScroll = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

export const Appbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const NavLink = ({ item }) => (
    <div
      key={item.title}
      className="block p-4 text-primary-text hover:bg-shade-1 rounded-sm cursor-pointer"
      onClick={() => {
        setIsMenuOpen(false);
        navigate("/");
      }}
    >
      {item.title}
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 z-40 w-full h-16 bg-white/70 text-black flex items-center border-b border-border backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between w-full px-4 sm:px-6 lg:px-8">
          <div
            className="text-primary font-inter font-bold text-2xl cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/");
            }}
          >
            Vakil
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            <ul className="flex items-center gap-4 font-medium text-primary-text">
              <li className="relative group px-4 py-2 hover:bg-shade-1 cursor-pointer rounded-sm hover:text-shade-3">
                Product
                <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-gray-400 shadow-2xl py-4 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="flex items-start gap-4 p-4 text-black hover:text-primary rounded-sm cursor-pointer"
                      onClick={() => {
                        if (window.location.pathname === "/") {
                          handleScroll(feature.title.replace(/\s+/g, "-"));
                        } else {
                          navigate("/");
                          handleScroll(feature.title.replace(/\s+/g, "-"));
                        }
                      }}
                    >
                      {feature.title}
                    </div>
                  ))}
                </div>
              </li>
              <li className="relative group px-4 py-2 hover:bg-shade-1 cursor-pointer rounded-sm hover:text-shade-3">
                Use cases
                <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-gray-400 shadow-2xl py-4 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in">
                  {useCases.map((use) => (
                    <div
                      key={use.title}
                      className="flex items-start gap-4 p-4 text-black hover:text-primary rounded-sm cursor-pointer"
                      onClick={() => {
                        if (window.location.pathname === "/") {
                          handleScroll(use.title.replace(/\s+/g, "-"));
                        } else {
                          navigate("/");
                          handleScroll(use.title.replace(/\s+/g, "-"));
                        }
                      }}
                    >
                      {use.title}
                    </div>
                  ))}
                </div>
              </li>
              <li
                className="px-4 py-2 hover:bg-shade-1 cursor-pointer rounded-sm hover:text-shade-3"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/pricing");
                }}
              >
                Pricing
              </li>
              <li
                className="px-4 py-2 hover:bg-shade-1 cursor-pointer rounded-sm hover:text-shade-3"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/about");
                }}
              >
                About Us
              </li>
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ButtonWhite label="Sign in" size={2} />
            <ButtonAscent
              label="Try me"
              size={2}
              onClick={() => {
                navigate("/dashboard");
              }}
            />
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-primary-text hover:text-primary"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between h-16 border-b border-border px-4 sm:px-6">
          <div className="text-primary font-bold text-2xl">Vakil</div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-primary-text hover:text-primary"
          >
            <span className="sr-only">Close menu</span>
            <CloseIcon />
          </button>
        </div>
        <div className="p-4 sm:p-6 flex flex-col h-[calc(100vh-4rem)]">
          <nav className="flex-grow space-y-4 overflow-y-auto">
            <div>
              <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Product
              </h3>
              <div className="mt-2 space-y-1">
                {features.map((item) => (
                  <NavLink key={item.title} item={item} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Use Cases
              </h3>
              <div className="mt-2 space-y-1">
                {useCases.map((item) => (
                  <NavLink key={item.title} item={item} />
                ))}
              </div>
            </div>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
                navigate("/pricing");
              }}
              className="block p-4 text-primary-text hover:bg-shade-1 rounded-sm"
            >
              Pricing
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
                navigate("/about");
              }}
              className="block p-4 text-primary-text hover:bg-shade-1 rounded-sm"
            >
              About
            </a>
          </nav>
          <div className="mt-auto pt-6 border-t border-border flex flex-col gap-4">
            <ButtonWhite label="Sign in" size={2} />
            <ButtonAscent
              label="Try me"
              size={2}
              onClick={() => {
                navigate("/dashboard");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
