import Button from "./Button";

function Item() {
  return (
    <div>
      <div className="flex gap-1">
        <p className="small-text text-neutral-70">30 points</p>
        <p className="small-text">-</p>
        <p className="small-text text-neutral-70">7 hours ago</p>
      </div>
      <h4>Show HN: Bigcapital - An open-source alternative to QuickBooks</h4>
      <div className="flex justify-between">
        <p className="button-text text-neutral-70">by sasavranesevic</p>
        <Button className="button-small text-primary-50" text="Read more" />
      </div>
    </div>
  );
}

export default Item;
