import List from "../../components/List/List";
import useHttpParallel from "../../hooks/use-http-parallel";
import Button from "../../components/UI/Button";

function LastAskedPage() {
  const firstURL = "https://hacker-news.firebaseio.com/v0/newstories.json";
  const secondURL = "https://hacker-news.firebaseio.com/v0/item";
  const { error, isLoading, ids, datas, loadMoreHandler } = useHttpParallel(
    firstURL,
    secondURL
  );

  return (
    <>
      {datas.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col pb-6">
          <List items={datas} />

          <Button
            className="mt-6 self-center !items-start button-medium border-[2px] border-primary-50 text-primary-50"
            onClick={loadMoreHandler}
          >
            Load more
          </Button>
        </div>
      )}
    </>
  );
}

export default LastAskedPage;
