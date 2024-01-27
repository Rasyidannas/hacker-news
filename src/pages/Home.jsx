import { defer, json, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import Top from "../components/Top/Top";

function HomePage() {
  const { items } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await rejectFallback={<p>Error loading data</p>} resolve={items}>
        {(loadedItems) => <Top items={loadedItems} />}
      </Await>
    </Suspense>
  );
}

export default HomePage;

// Fetch API
async function loadTopNews() {
  const ids = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );

  if (!ids.ok) {
    throw json({ message: "Could not fetch news." }, { status: 500 });
  }

  const resIds = await ids.json();
  const top5Ids = resIds.slice(0, 5);

  //get links with top 5 ids
  const urlItems = top5Ids.map(async (id) => {
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    const response = await fetch(url);

    if (!response.ok) {
      throw json({ message: "Could not fetch news." }, { status: 500 });
    }

    const item = await response.json();

    return item;
  });

  const resItems = await Promise.all(urlItems);

  return resItems;
}

export function loader() {
  return defer({
    items: loadTopNews(),
  });
}
