import { Button } from "../ui/button";
import { useState } from "react";
import { ModeToggle } from "../ui/mode-toggle-btn";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    {
      href: "/",
      title: "Founders",
    },
    {
      href: "/guide",
      title: "Guide",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },
    {
      href: "/login",
      title: "Log In",
    },
  ];

  return (
    <div>
      <nav
        className={`flex justify-between items-center px-8 py-3 relative
        ${darkMode ? "bg-neutral-900" : null}
        `}
      >
        <img
          src="https://a-us.storyblok.com/f/1023015/68x24/8f586a9168/logo.svg"
          alt="logo"
          className={darkMode ? "brightness-200" : ""}
        />

        <div className="flex items-center gap-5">
          {navItems.map((nav, index) => (
            <a
              href={nav.href}
              key={index}
              className={`text-sm ${
                darkMode
                  ? "text-white hover:text-white/55"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {nav.title}
            </a>
          ))}

          <Button className="bg-blue-500 text-shadow shadow text-white hover:bg-blue-600">
            Start free trial
          </Button>

          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
