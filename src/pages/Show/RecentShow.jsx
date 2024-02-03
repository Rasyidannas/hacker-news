import List from "../../components/List/List";
import useHttpParallel from "../../hooks/use-http-parallel";
import Button from "../../components/UI/Button";
import spinner from "../../assets/spinner.svg";
import SkeletonItems from "../../components/Skeleton/Items";

function RecentShowPage() {
  const firstURL = "https://hacker-news.firebaseio.com/v0/newstories.json";
  const secondURL = "https://hacker-news.firebaseio.com/v0/item";
  const { error, isLoading, ids, datas, loadMoreHandler } = useHttpParallel(
    firstURL,
    secondURL
  );

  return (
    <>
      {datas.length === 0 ? (
        <SkeletonItems times={4} className="w-full" />
      ) : (
        <div className="flex flex-col pb-6">
          <List items={datas} />

          <Button
            className="mt-6 self-center !items-start button-medium border-[2px] border-primary-50 text-primary-50 hover:bg-primary-50 hover:text-white visited:bg-primary-50 visited:text-white active:bg-primary-50 active:text-white transition-all relative"
            onClick={loadMoreHandler}
          >
            {/* this is when loading for load more */}
            {isLoading && (
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center rounded-sm bg-primary-50 border-primary-50">
                <figure className="w-4 h-4 mr-1 animate-spin">
                  <img src={spinner} />
                </figure>
                <p className="my-auto text-white">Loading</p>
              </div>
            )}
            Load more
          </Button>
        </div>
      )}
    </>
  );
}

export default RecentShowPage;
