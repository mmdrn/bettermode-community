import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4">
      <p className="text-bettermode-green-primary flex items-center justify-center w-full gap-2 font-geist-mono font-semibold flex-col text-2xl">
        <Frown strokeWidth={2.6} size={80} className="mb-8" />
        404 Not Found
      </p>
    </div>
  );
}
