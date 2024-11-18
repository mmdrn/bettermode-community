/**
 * Main layout component that wraps the application content
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child elements to be rendered within the layout
 * @returns {JSX.Element} The rendered layout component
 */
import { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-zinc-100 pt-32">
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
