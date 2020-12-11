import getNewsAPI from "../API/getNews";
import { UPDATE_CONTENT } from "./globalVaribl";

export const getNews = () => {
  return (dispatch) => {
    //console.log(2);
    getNewsAPI().then((data) => {
      data.sort((a, b) => b.time - a.time);
      dispatch({ type: UPDATE_CONTENT, payload: data });
    });
  };
};
