/**
 * Header component that displays a title with an emoji icon
 * @param {Object} props - Component props
 * @param {string} props.title - The title text to display in the header
 * @returns {JSX.Element} Header component with title and emoji
 */
export default function Header({ title }: { title: string }) {
  return (
    <div className="border-b p-2 mb-6">
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl font-mono inline-flex items-center justify-start gap-3">
          <span className="text-3xl w-11 h-11 rounded-md bg-blue-500 flex items-center justify-center">
            🥸
          </span>
          {title}
        </h1>
      </div>
    </div>
  );
}
