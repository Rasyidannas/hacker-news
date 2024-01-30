import { useEffect, useState } from "react";

const useHttpParallel = (firstUrl, secondUrl, loadItems = 10) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFirstFetch, setLoadingFirstFetch] = useState(true);
  const [ids, setIds] = useState([]);
  const [datas, setDatas] = useState([]);
  const [countClick, setCountClick] = useState(0);

  // fetch IDS
  useEffect(() => {
    const fetchIds = async () => {
      setLoadingFirstFetch(true);
      try {
        const response = await fetch(firstUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch IDs");
        }

        const ids = await response.json();
        setIds(ids);
        setLoadingFirstFetch(false);
      } catch (error) {
        setError(error.message || "Something went wrong while fetching IDs");
      }
    };

    fetchIds();
  }, [firstUrl]);

  //fetch info by IDS
  useEffect(() => {
    const fetchInfoByIds = async () => {
      setIsLoading(true);
      try {
        const startIndex = countClick * loadItems;
        const endIndex = startIndex + loadItems;
        const idsToFetch = ids.slice(startIndex, endIndex);

        const promises = idsToFetch.map(async (id) => {
          const url = `${secondUrl}/${id}.json`;
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Failed to fetch data for ID ${id}`);
          }

          return response.json();
        });

        const data = await Promise.all(promises);

        setDatas((prevState) => [...prevState, ...data]);
      } catch (error) {
        setError(
          error.message || "Something went wrong while fetching data by IDs"
        );
      } finally {
        setIsLoading(false);
      }
    };

    //check if ids filled
    if (ids.length > 0) fetchInfoByIds();
  }, [secondUrl, loadingFirstFetch, countClick, loadItems]);

  //handler for load more
  const loadMoreHandler = () => {
    setCountClick((prevState) => prevState + 1);
  };

  return {
    error,
    isLoading,
    ids,
    datas,
    loadMoreHandler,
  };
};

export default useHttpParallel;
