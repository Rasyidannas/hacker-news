import { Suspense } from "react";
import {
  Await,
  defer,
  json,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import List from "../../components/List/List";
import notFoundImage from "../../assets/not_found.svg";

function SearchPage() {
  const { news } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("query");

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="mt-12">
        <h2 className="mb-6">
          Search for <span className="italic">&quot;{searchValue}&quot;</span>
        </h2>
        <Await resolve={news}>
          {(loadedNews) => <List items={loadedNews} className=" w-5/6" />}
        </Await>
        {!news.length && (
          <div className="text-center flex flex-col items-center gap-12 w-80 mx-auto mt-24">
            <img src={notFoundImage} />
            <div className="flex flex-col gap-4">
              <h3>News Not Found</h3>
              <p className="text-neutral-70">
                Try refining your search or explore our popular categories below
              </p>
            </div>
            <a href="/" className="button-medium bg-primary-50">
              Back To News
            </a>
          </div>
        )}
      </div>
    </Suspense>
  );
}

export default SearchPage;

//Fetch API
async function fetchSearchProduct(searchValue) {
  let url = "http://hn.algolia.com/api/v1/search";

  if (searchValue) {
    url = "http://hn.algolia.com/api/v1/search?query=" + searchValue;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw json({ message: "Could not fetch news." }, { status: 500 });
  }

  const data = await response.json();
  return data.hits;
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("query");

  return defer({ news: fetchSearchProduct(searchTerm) });
}
