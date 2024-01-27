import Button from "../UI/Button";
import ArrowRightIcon from "../Icons/ArrowRight";

function HighlightList({ item, index }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-neutral-50 italic capitalize">
            {index + 1} {item.type}
          </h3>
          <a href={item.url}>
            <h1 className="display-text italic font-bold">{item.title}</h1>
          </a>
        </div>
        <h3 className="text-neutral-50">by {item.by}</h3>
      </div>
      <a href={item.url}>
        <Button
          className="button-medium text-white bg-primary-50"
          text="Read more"
        >
          <ArrowRightIcon />
        </Button>
      </a>
    </>
  );
}

export default HighlightList;
