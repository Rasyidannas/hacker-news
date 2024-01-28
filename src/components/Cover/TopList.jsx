import ItemTop from "../UI/ItemTop";

function TopList({ item, index }) {
  return (
    <div className=" first:mt-0 mt-4 pb-4 last:border-b-0 border-b border-neutral-80">
      <ItemTop item={item} index={index} />
    </div>
  );
}

export default TopList;
