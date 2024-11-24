/**
 * Footer component
 * @returns {JSX.Element} Footer component
 */
export default function Footer() {
  return (
    <div className="border-t dark:border-t-zinc-500 py-6 mt-10 bg-white dark:bg-zinc-800 absolute left-0 right-0 m-auto bottom-0 transition-colors">
      <div className="container mx-auto">
        <p className="text-xs text-zinc-400 font-geist-mono dark:text-white transition-colors">
          © 2024 Bettermode Community Platform. All rights reserved.
        </p>
      </div>
    </div>
  );
}
