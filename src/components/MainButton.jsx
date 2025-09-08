export default function MainButton({ children, ...props }) {
  return (
    <button {...props} className="flex gap-5 rounded-full bg-darkpurple p-5 text-white font-bold shadow-md cursor-pointer">
      {children}
    </button>
  );
}
