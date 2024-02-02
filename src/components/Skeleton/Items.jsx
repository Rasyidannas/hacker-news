function Item({ className }) {
  return (
    <div
      className={`animate-pulse flex-1 flex flex-col border-b last:border-b-0 border-neutral-80 bg-neutral-100 gap-3 py-6 px-3 ${className}`}
    >
      <div className="flex w-4/12 h-2 gap-1 mb-4 rounded-lg bg-neutral-80"></div>
      <div className="flex w-11/12 h-2 gap-1 rounded-lg bg-neutral-80"></div>
      <div className="flex w-8/12 h-2 gap-1 rounded-lg bg-neutral-80"></div>
      <div className="flex justify-between mt-4">
        <div className="flex w-2/12 h-2 gap-1 rounded-lg bg-neutral-80"></div>
        <div className="flex w-2/12 h-2 gap-1 rounded-lg bg-neutral-80"></div>
      </div>
    </div>
  );
}

//this is list itmes
function Items({ times, className }) {
  const repeatedElements = Array.from({ length: times }, (_, index) => (
    <Item key={index} className={className} />
  ));

  return <div className={className}>{repeatedElements}</div>;
}

export default Items;
