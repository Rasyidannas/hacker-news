import Button from "../UI/Button";
import Item from "../UI/Item";

function RecentList({ items }) {
  return (
    <div className="flex flex-col gap-4 pb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-secondary-50">Recent Show</h2>
        <a href="/show">
          <Button className="text-primary-50">See more</Button>
        </a>
      </div>
      <div className="flex gap-4 ">
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            className="pr-4 last:pr-0 border-r last:border-r-0"
          />
        ))}
      </div>
    </div>
  );
}

export default RecentList;
