import { defer, json, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import Highlight from "../components/Cover/Highlight";
import HighlightMobile from "../components/Cover/HighlightMobile";
import RecentList from "../components/Cover/RecentList";
import SkeletonHome from "../components/Skeleton/Home";

function HomePage() {
  const { news, shows } = useLoaderData();

  return (
    <Suspense fallback={<SkeletonHome />}>
      <div className="flex flex-col gap-6">
        <Await resolve={news}>
          {(loadedTopNews) => (
            <>
              <HighlightMobile items={loadedTopNews} />
              <Highlight items={loadedTopNews} />
            </>
          )}
        </Await>
        <div className="hidden md:block w-full h-[1px] border-b border-neutral-80"></div>
        <Await resolve={shows}>
          {(loadRecentShow) => <RecentList items={loadRecentShow} />}
        </Await>
      </div>
    </Suspense>
  );
}

export default HomePage;

// Fetch API Top 5 News
async function loadTopNews() {
  const responseIds = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );

  if (!responseIds.ok) {
    throw json({ message: "Could not fetch news." }, { status: 500 });
  }

  const ids = await responseIds.json();
  const top5Ids = ids.slice(0, 5);

  //get info with top 5 ids
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

// Fetch API Recent Show
async function loadRecentShow() {
  const ids = await fetch(
    "https://hacker-news.firebaseio.com/v0/showstories.json"
  );

  if (!ids.ok) {
    throw json({ message: "Could not fetch shows." }, { status: 500 });
  }

  const resIds = await ids.json();
  const top3Ids = resIds.slice(0, 3);

  //get info with top 3 ids
  const urlItems = top3Ids.map(async (id) => {
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
    news: loadTopNews(),
    shows: loadRecentShow(),
  });
}
