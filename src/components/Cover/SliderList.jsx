import Button from "../UI/Button";
import ArrowRightIcon from "../Icons/ArrowRight";

function SliderList({ item, index }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="italic capitalize text-neutral-50">
            {index + 1} {item.type}
          </h3>
          <a href={item.url}>
            <h1 className="italic font-bold display-text">{item.title}</h1>
          </a>
        </div>
        <h3 className="text-neutral-50">by {item.by}</h3>
      </div>
      <a href={item.url}>
        <Button className="mt-24 text-white md:mt-6 button-medium bg-primary-50">
          Read more
          <ArrowRightIcon />
        </Button>
      </a>
    </>
  );
}

export default SliderList;
