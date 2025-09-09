
export default function CardDesign({ title, content }) {
  return (
    <div className="border-8 w-full h-full border-purple bg-white rounded-xl text-background shadow-md overflow-hidden">
      <div className="w-full py-2 bg-darkpurple">
        <h3 className="font-bold ml-2 text-lg">{title}</h3>
      </div>
      <div className="p-4">
        {content}
      </div>
    </div>
  );
}