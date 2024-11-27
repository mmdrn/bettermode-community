import { Link } from "react-router-dom";
import { Menu, Sun, SunMoon } from "lucide-react";
import { useGlobalContext } from "../../../../contexts/global-context";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import logo from "./../../../../assets/logo.svg";

/**
 * Header component that displays the navigation menu, logo, and theme toggle
 * @returns {JSX.Element} Header component with navigation and theme controls
 */
export default function Header() {
  const globalContext = useGlobalContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Renders the theme toggle button with sun/moon icons
   * @returns {JSX.Element} Theme toggle button component
   */
  const RenderThemeButton = () => (
    <button
      onClick={() => globalContext.setTheme(globalContext.theme === "light" ? "dark" : "light")}
      className="relative w-6 h-6"
      data-testid="theme-toggle-button"
    >
      <Sun
        className={twMerge(
          globalContext.theme === "dark" ? "opacity-0" : "opacity-100",
          "absolute inset-0 transition-opacity"
        )}
      />

      <SunMoon
        className={twMerge(
          globalContext.theme === "light" ? "opacity-0" : "opacity-100",
          "absolute inset-0 transition-opacity"
        )}
      />
    </button>
  );

  /**
   * Renders the navigation menu items
   * @returns {JSX.Element} Navigation links component
   */
  const RenderMenuItems = () => (
    <>
      <Link
        to={"/"}
        className="flex items-center justify-start gap-2 px-1 hover:text-bettermode-green-primary transition-colors"
      >
        Home
      </Link>
      <Link
        to={"/posts"}
        className="flex items-center justify-start gap-2 px-1 hover:text-bettermode-green-primary transition-colors"
      >
        Posts
      </Link>
      <Link
        to={"/signin"}
        className="flex items-center justify-start gap-2 px-1 hover:text-bettermode-green-primary transition-colors"
      >
        Documents
      </Link>
      <Link
        to={"https://github.com/mmdrn/bettermode-community"}
        className="flex items-center justify-start gap-2 px-1 hover:text-bettermode-green-primary transition-colors"
      >
        Github
      </Link>
      <Link
        to={"/signin"}
        className="flex items-center justify-start gap-2 px-1 hover:text-bettermode-green-primary transition-colors"
      >
        Signin
      </Link>
    </>
  );

  return (
    <>
      {/* Main header container */}
      <div className="border-b dark:border-b-zinc-500 py-3 md:py-6 mb-10 bg-white dark:bg-zinc-800 shadow-sm fixed z-20 w-full top-0 light transition-colors">
        <div className="container mx-auto flex justify-start md:justify-between items-center px-4">
          {/* Mobile menu toggle button */}
          <button
            className="mr-4 md:hidden dark:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="menu-toggle-button"
          >
            <Menu size={34} />
          </button>

          {/* Logo image */}
          <Link to={"/home"}>
            <img
              src={logo}
              alt="Bettermode Community"
              title="Bettermode Community Logo"
              className="w-40 h-[39px] block"
            />
          </Link>

          {/* Desktop navigation menu */}
          <div className="hidden md:flex items-center justify-end gap-5 dark:text-white transition-colors">
            {RenderMenuItems()}
            {RenderThemeButton()}
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div
        data-testid="mobile-menu"
        className={twMerge(
          "w-72 h-dvh bg-white dark:bg-zinc-800 shadow-sm fixed left-0 top-0 z-10 pt-20 px-4 pb-4 flex flex-col items-start justify-between border-r dark:border-r-zinc-500 dark:text-white md:hidden transition-all",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-72"
        )}
      >
        <div className="flex flex-col items-start justify-start gap-5">{RenderMenuItems()}</div>

        {RenderThemeButton()}
      </div>
    </>
  );
}
