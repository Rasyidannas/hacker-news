import Item from "../UI/Item";

function List({ items, className }) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {items.map((item, i) => (
        <Item
          item={item}
          key={i}
          className="flex flex-col gap-1 pb-6 border-b last:border-0 border-neutral-80"
        />
      ))}
    </div>
  );
}

export default List;
