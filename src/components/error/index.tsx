import { Bug } from "lucide-react";

export default function Error({ className }: { className?: string }) {
  return (
    <div className={`col-span-4 flex justify-center ${className || ""}`}>
      <p className="text-bettermode-green-primary flex items-center justify-center h-[42px] w-full gap-2 font-geist-mono font-semibold">
        <Bug strokeWidth={2.6} size={30} />
        Something wrong happened.
      </p>
    </div>
  );
}
