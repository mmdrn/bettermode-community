import { Link } from "react-router-dom";
import logo from "./../../../../assets/logo.svg";

/**
 * Header component that displays the logo
 * @returns {JSX.Element} Header component with logo
 */
export default function Header() {
  return (
    <div className="border-b py-6 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src={logo}
          alt="Bettermode Community"
          title="Bettermode Community Logo"
          className="w-56"
        />

        <div className="flex items-center justify-end flex-row-reverse gap-5">
          <Link
            to={"/signin"}
            className="flex items-center justify-start gap-2 px-1 hover:text-bettermode-green-primary"
          >
            Signin
          </Link>

          <Link
            to={"/signin"}
            className="flex items-center justify-start gap-2 px-1 hover:text-bettermode-green-primary"
          >
            Github
          </Link>

          <Link
            to={"/signin"}
            className="flex items-center justify-start gap-2 px-1 hover:text-bettermode-green-primary"
          >
            Documents
          </Link>
        </div>
      </div>
    </div>
  );
}
