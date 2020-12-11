import getData from "./getData";
import { URL } from "./globalVaribl";

function checkData(oldData, newData) {
  if (oldData.length !== 100) return 0;
  for (let i = 0; i < 100; i++) if (oldData[i].id !== newData[i]) return 0;
  return 1;
}

export default async function getNews(url = URL) {
  const idNews = await getData(url);
  const dataNews = [];
  // Проверка
  //if (checkData(oldData, idNews)) return oldData;
  for (let i = 0; i < 100; i++) {
    const urlNewsId = `https://hacker-news.firebaseio.com/v0/item/${idNews[i]}.json?print=pretty`;
    const itemNews = await getData(urlNewsId);
    console.log(itemNews);
    dataNews.push(itemNews);
  }
  return dataNews;
}
