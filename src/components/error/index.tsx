import { Bug } from "lucide-react";

/**
 * Error component displays an error message with a bug icon
 * @param {Object} props - Component props
 * @param {string} [props.className] - Optional CSS class name for additional styling
 * @returns {JSX.Element} Error message component
 */
export default function Error({ className }: { className?: string }) {
  return (
    // Container div with dynamic className for positioning
    <div className={`col-span-4 flex justify-center ${className || ""}`}>
      {/* Error message with bug icon */}
      <p className="text-bettermode-green-primary flex items-center justify-center h-[42px] w-full gap-2 font-geist-mono font-semibold">
        <Bug data-testid="bug-icon" strokeWidth={2.6} size={30} />
        Something wrong happened.
      </p>
    </div>
  );
}
