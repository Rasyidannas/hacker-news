import SkeletonItems from "../../components/Skeleton/Items";

function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6 mt-12">
        <div className="w-2/3 p-12 rounded-lg bg-secondary-90">
          <div className="flex flex-col flex-1 gap-6 px-3 py-6 animate-pulse">
            <div className="flex w-4/12 h-3 gap-1 mb-4 bg-white rounded-lg"></div>
            <div className="flex w-11/12 h-3 gap-1 bg-white rounded-lg"></div>
            <div className="flex w-8/12 h-3 gap-1 bg-white rounded-lg"></div>
            <div className="flex w-6/12 h-3 gap-1 bg-white rounded-lg"></div>
            <div className="flex w-8/12 h-3 gap-1 bg-white rounded-lg"></div>
            <div className="flex w-4/12 h-3 gap-1 mt-4 bg-white rounded-lg"></div>
          </div>
        </div>
        <div className="w-1/2">
          <SkeletonItems times={5} className="w-full" />
        </div>
      </div>
      <div className="w-full h-[1px] border-b border-neutral-80"></div>
      <div className="py-6 ">
        <SkeletonItems
          times={3}
          className="flex !border-b-0 border-r last:border-r-0"
        />
      </div>
    </div>
  );
}

export default Home;
