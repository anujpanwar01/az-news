import { NewsCards } from "./NewsCard.Styles";
import { BsShare } from "react-icons/bs";

const NewsCard = (props) => {
  const updatedDescription = (str) => {
    if (!str) return;
    const findIndex = str.lastIndexOf("[");
    return str.slice(0, findIndex || -3).trim();
  };
  const shareNews = async () => {
    try {
      await navigator.share(props.news);
    } catch (err) {
      alert("Error: " + err);
    }
  };

  let content =
    new Date(props.news?.publishedAt).getDate() === new Date().getDate()
      ? "Today"
      : new Date(props.news?.publishedAt).toLocaleString();

  return (
    <NewsCards>
      <div className="img-container">
        <img src={props.news.urlToImage} alt={props.news.title} />
      </div>
      <div className="text-cotainer">
        <a href={props.news?.url} target="_blank" rel="noreferrer">
          {props.news.title}
        </a>
        {!props.news?.content && <p>{props.news?.description}</p>}
        <p>{updatedDescription(props.news?.content)}</p>

        <div className="source">
          <time>
            {content}
            {new Date(props.news.publishedAt).toLocaleString().split(",")[1]}
          </time>

          <p>{props.news?.source?.name}</p>
          <button className="share-news" onClick={shareNews}>
            <BsShare />
          </button>
          <button>like</button>
        </div>
      </div>
    </NewsCards>
  );
};
export default NewsCard;
/*
Former Police Commissioner of Mumbai, Sanjay Pandey, has been summoned by the Enforcement Directorate or ED to appear before it on July 5 in connection with a money laundering case."

author: "NDTV Sports Desk"
content: "England vs India, 5th Test Day 3 Live Score Updates: India are a wicket down in their second innings against England, as Shubman Gill was dismissed in the first over by Shubman Gill. India's lead, ho… [+1289 chars]"
description: "IND vs ENG Test Score Updates: India are a wicket down in their second innings against England, as Shubman Gill was dismissed in the first over by Shubman Gill"
publishedAt: "2022-07-03T14:26:08Z"
source: {id: null, name: 'NDTV News'}
title: "India vs England Edgbaston 5th Test Day 3 LIVE Score Updates: Cheteshwar Pujara, Hanuma Vihari Take India's Lead Past 150 - NDTV Sports"
url: "https://sports.ndtv.com/england-vs-india-2022/india-vs-england-edgbaston-5th-test-day-3-live-score-updates-3122975"
urlToImage: "https://c.ndtvimg.com/2022-07/q1dekic_cheteshwar-pujara-afp_625x300_03_July_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"

*/
