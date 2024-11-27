import { LoaderCircle } from "lucide-react";

/**
 * Loading component that displays a spinning loader circle with text
 * @param {Object} props - Component props
 * @param {string} [props.className] - Optional CSS class name to apply additional styles
 * @returns {JSX.Element} Loading component with spinner and text
 */
export default function Loading({ className }: { className?: string }) {
  return (
    // Container div with dynamic className for flexible positioning
    <div className={`col-span-4 flex justify-center ${className || ""}`}>
      {/* Loading text with spinner icon */}
      <p className="text-bettermode-green-primary flex items-center justify-center h-[42px] w-full gap-2 font-geist-mono font-semibold">
        <LoaderCircle
          data-testid="loader-icon"
          className="animate-spin"
          strokeWidth={2.6}
          size={30}
        />
        Loading data...
      </p>
    </div>
  );
}
