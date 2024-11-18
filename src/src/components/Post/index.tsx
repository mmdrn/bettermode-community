type Props = {
  id: string;
  title: string;
  description: string;
};

export default function Post({ title, description }: Props) {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="w-full aspect-square bg-slate-400 rounded-xl relative"></div>
      <div className="w-full flex items-start justify-start flex-col p-4 pt-6 -mt-3 rounded-b-md">
        <h2 className="truncate font-bold w-full font-mono mb-3">{title}</h2>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
