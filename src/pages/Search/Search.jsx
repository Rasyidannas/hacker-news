import { Suspense, useEffect } from "react";
import {
  Await,
  defer,
  json,
  useLoaderData,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import List from "../../components/List/List";
import notFoundImage from "../../assets/not_found.svg";
import SkeletonItems from "../../components/Skeleton/Items";

function SearchPage() {
  const navigate = useNavigate();

  //this is for redirect
  useEffect(() => {
    navigate("/search", { replace: true });
  }, [navigate]);

  const { news } = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("query");

  return (
    <Suspense fallback={<SkeletonItems times={4} className="w-full" />}>
      <div className="mt-12">
        {searchValue && (
          <h2 className="mb-6">
            Search for <span className="italic">&quot;{searchValue}&quot;</span>
          </h2>
        )}
        <Await resolve={news}>
          {(loadedNews) => (
            <>
              <List items={loadedNews} className="w-5/6 " />
              {/* This is for error or not found news */}
              {!loadedNews.length && (
                <div className="flex flex-col items-center gap-12 mx-auto mt-24 text-center w-80">
                  <img src={notFoundImage} />
                  <div className="flex flex-col gap-4">
                    <h3>News Not Found</h3>
                    <p className="text-neutral-70">
                      Try refining your search or explore our popular categories
                      below
                    </p>
                  </div>
                  <a href="/" className="button-medium bg-primary-50">
                    Back To News
                  </a>
                </div>
              )}
            </>
          )}
        </Await>
      </div>
    </Suspense>
  );
}

export default SearchPage;

//Fetch API
async function fetchSearchProduct(searchValue) {
  let url = "https://hn.algolia.com/api/v1/search";

  if (searchValue) {
    url = "https://hn.algolia.com/api/v1/search?query=" + searchValue;
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
