import { setArticles } from "./news.slice";

export const getNews = () => {
  return async (dispatch) => {
    const findNews = async () => {
      const res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=02fa5f3687c94273b7d3c55f302e7a1d"
      );
      const data = await res.json();
      return data;
    };

    try {
      const data = await findNews();
      dispatch(setArticles(data.articles));
    } catch (err) {
      dispatch(setArticles(err));
    }
  };
};
