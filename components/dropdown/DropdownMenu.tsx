export const DropdownMenu = ({ items }: { items: any }) => {
  return (
    <div className="absolute left-0 z-10 bg-white border border-gray-300 mt-2 w-full hidden group-hover:block">
      {items.map((item: any, index: number) => (
        <a
          key={index}
          href={item.href}
          className="block px-4 py-2 text-black hover:bg-gray-200"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
