import { ReactNode, useEffect } from "react";
import { useGlobalContext } from "../../contexts/global-context";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Error from "../../components/error";
import Cookies from "js-cookie";

const ErrorFallback = () => {
  return (
    <div role="alert">
      <Error />
    </div>
  );
};

/**
 * Main layout component that wraps the application content
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child elements to be rendered within the layout
 * @returns {JSX.Element} The rendered layout component
 */
export default function MainLayout({ children }: { children: ReactNode }) {
  const globalContext = useGlobalContext();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    const privateRoutes = ["/posts"];

    if (location.pathname.startsWith("/signin") && token) {
      navigate("/", { replace: true });
    } else if (privateRoutes.some((item) => item.startsWith(location.pathname)) && !token) {
      navigate("/signin", { replace: true });
    }
  }, [location]);

  return (
    <div
      className={`${globalContext.theme} bg-zinc-100 dark:bg-zinc-700 pt-20 md:pt-32 transition-colors relative pb-28 min-h-dvh`}
    >
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
      <Footer />
    </div>
  );
}
