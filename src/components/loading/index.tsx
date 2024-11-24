import { LoaderCircle } from "lucide-react";

export default function Loading({ className }: { className?: string }) {
  return (
    <div className={`col-span-4 flex justify-center ${className || ""}`}>
      <p className="text-bettermode-green-primary flex items-center justify-center w-full gap-2 font-geist-mono font-semibold">
        <LoaderCircle className="animate-spin" strokeWidth={2.6} size={30} />
        Loading data...
      </p>
    </div>
  );
}
