import getItemAPI from "../API/getItem";
import { DETAIL_CONTENT } from "./globalVaribl";

export const getItem = (url) => {
  return (dispatch) => {
    getItemAPI(url).then((data) => {
      // console.log("data       ");
      // console.log(data);
      const load = true;
      dispatch({ type: DETAIL_CONTENT, payload: [data, load] });
    });
  };
};
