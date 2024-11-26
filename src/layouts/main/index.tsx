import { ReactNode } from "react";
import { useGlobalContext } from "../../contexts/global-context";
import Header from "./components/header";
import Footer from "./components/footer";

/**
 * Main layout component that wraps the application content
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child elements to be rendered within the layout
 * @returns {JSX.Element} The rendered layout component
 */
export default function MainLayout({ children }: { children: ReactNode }) {
  const globalContext = useGlobalContext();

  return (
    <div
      className={`${globalContext.theme} bg-zinc-100 dark:bg-zinc-700 pt-20 md:pt-32 transition-colors relative pb-28 min-h-dvh`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
