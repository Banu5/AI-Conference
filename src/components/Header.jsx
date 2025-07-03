import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
    setActiveDropdown(null);
  };

  return (
    <div
      className="fixed top-4 left-0 w-full z-50 font-anta"
      style={{ fontFamily: "'Anta', sans-serif" }}
    >
      {/* Modern floating navigation bar */}
      <div
        className={`
          relative flex items-center
          w-[96vw] max-w-7xl min-h-[3.2rem]
          mx-auto px-10
          rounded-[2.5rem]
          border border-[#7f9cf5]
          ring-1 ring-[#7f9cf5]/20
          shadow-md
          bg-n-8/80
          backdrop-blur-xl
          transition-all duration-300
          before:content-[''] before:absolute before:inset-0 before:rounded-[2.5rem]
          before:pointer-events-none before:shadow-[0_0_12px_2px_rgba(127,156,245,0.10)]
          z-1000
        `}
        style={{
          background: "rgba(24, 28, 40, 0.8)",
          boxShadow: "0 4px 16px 0 rgba(127,156,245,0.10)",
          willChange: "transform, opacity",
          backdropFilter: "blur(14px)", // <--- This ensures blur is always applied
          WebkitBackdropFilter: "blur(24px)", // <--- For Safari support
        }}
      >
        <a className="block w-[8rem] xl:mr-8" href="#hero">
          <img src="/icon.png" width={80} height={20} alt="AI Conference" />
        </a>
        <nav className="flex-1 flex justify-center items-center">
          <div className="flex flex-row items-center gap-2">
            {navigation.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.url}
                  onClick={() => !item.dropdown && handleClick()}
                  className={`
                    block font-anta font-bold text-base tracking-wider uppercase
                    text-n-1 transition-all duration-200
                    hover:text-[#7f9cf5] px-5 py-2
                    ${item.url === pathname.hash ? "z-2 text-[#7f9cf5]" : "text-n-1/70"}
                    group-hover:scale-105
                  `}
                  style={{
                    transition: "color 0.2s, transform 0.2s",
                    fontFamily: "'Anta', sans-serif",
                  }}
                >
                  {item.title}
                </a>
                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.id && (
                  <div
                    className={`
                      absolute left-1/2 -translate-x-1/2 mt-2 w-52
                      rounded-xl shadow-lg
                      bg-n-8/95 backdrop-blur-xl
                      border border-[#7f9cf5]/30
                      flex flex-col
                      z-50
                    `}
                  >
                    {item.dropdown.map((dropItem, index) => (
                      <a
                        key={index}
                        href={dropItem.url}
                        onClick={handleClick}
                        className="
                          block px-4 py-3
                          font-anta text-base tracking-wide
                          text-n-1/90
                          hover:text-[#7f9cf5]
                          hover:bg-n-7/50
                          first:rounded-t-xl last:rounded-b-xl
                          transition-all duration-200
                        "
                        style={{ fontFamily: "'Anta', sans-serif" }}
                      >
                        {dropItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
