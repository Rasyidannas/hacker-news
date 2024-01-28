import Button from "../UI/Button";
import Item from "../UI/Item";

function RecentList({ items }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-secondary-50">Recent Show</h2>
        <Button className="text-primary-50">See more</Button>
      </div>
      <div className="flex gap-4 ">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default RecentList;
