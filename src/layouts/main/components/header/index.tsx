import { Link } from "react-router-dom";
import logo from "./../../../../assets/logo.svg";
import { Sun, SunMoon } from "lucide-react";
import { useGlobalContext } from "../../../../contexts/global-context";
import { twMerge } from "tailwind-merge";

/**
 * Header component that displays the logo
 * @returns {JSX.Element} Header component with logo
 */
export default function Header() {
  const globalContext = useGlobalContext();

  return (
    <div className="border-b dark:border-b-zinc-500 py-6 mb-10 bg-white dark:bg-zinc-800 shadow-sm fixed z-10 w-full top-0 light transition-colors">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src={logo}
          alt="Bettermode Community"
          title="Bettermode Community Logo"
          className="w-56"
        />

        <div className="flex items-center justify-end flex-row-reverse gap-5 dark:text-white">
          <button
            onClick={() =>
              globalContext.setTheme(
                globalContext.theme === "light" ? "dark" : "light"
              )
            }
            className="relative w-6 h-6 top-0.5"
          >
            <Sun
              className={twMerge(
                globalContext.theme === "dark" ? "opacity-0" : "opacity-100",
                "absolute inset-0"
              )}
            />

            <SunMoon
              className={twMerge(
                globalContext.theme === "light" ? "opacity-0" : "opacity-100",
                "absolute inset-0"
              )}
            />
          </button>

          <Link
            to={"/signin"}
            className="flex items-center justify-start gap-2 px-1 hover:text-bettermode-green-primary transition-colors"
          >
            Signin
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
            Documents
          </Link>
        </div>
      </div>
    </div>
  );
}
