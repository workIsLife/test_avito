import React from "react";
import {
  UPDATE_CONTENT,
  DETAIL_CONTENT,
  UPDATE_COMMENT,
  DETAIL_COMMENT,
  EXPAND_COMMENT
} from "../action/globalVaribl";

const initialStore = {
  id: 25381325,
  by: "gime",
  score: 34,
  kids: [],
  title: "qwertyuiop",
  time: 1175714200,
  url: ""
};

export default function reducer(state = initialStore, action) {
  if (action.type === UPDATE_CONTENT) return action.payload;
  else if (action.type === DETAIL_CONTENT) {
    console.log("Detail_contact", action.payload);
    return action.payload;
  } else if (action.type === UPDATE_COMMENT) return action.payload;
  else if (action.type === DETAIL_COMMENT) {
    console.log("sas", action.payload);
    return action.payload;
  } else if (action.type === EXPAND_COMMENT) {
    console.log("EXPAND_COMMENT", action.payload);
    return action.payload;
  }
  return [state];
}
