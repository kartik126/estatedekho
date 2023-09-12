import React from 'react';
import apiClient from 'utils/apiClient';

function useNewsList() {
  const [newsList, setNewsList] = React.useState([]);
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.post(apiClient.Urls.newsList, {});
        if (response.success) {
          setNewsList(response.data.data);
        } else {
          setNewsList([]);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setNewsList([]);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  return newsList;
}

export default useNewsList;
