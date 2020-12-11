import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DisplayComments from "./DisplayComments";
import "./commentStyle.css";

function Comments({ kids, comments }) {
  //console.log("props", props);
  if (!kids) return <h1>Non</h1>;
  return (
    <>
      <DisplayComments comments={comments} />
    </>
  );
}

function ItemNews(props) {
  {
    console.log("props", props);
  }
  if (!props.load) {
    return <h1>Load</h1>;
  } else {
    let date = new Date(props.itemNews.time);
    return (
      <div className="item-news">
        <h3>{props.itemNews.title}</h3>
        <p>Raiting: {props.itemNews.score}</p>
        <p>
          Date: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}{" "}
          {date.getHours()}:{date.getMinutes()}
        </p>
        <p>Author: {props.itemNews.by}</p>
        <p>
          Ссылка: <a href={props.itemNews.url}>{props.itemNews.url}</a>
        </p>
        <p>Number of comments: {props.itemNews.descendants}</p>
        <Comments kids={props.itemNews.kids} comments={props.comments} />
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    itemNews: state[0].itemData,
    comments: state[0].commitData,
    load: state[1],
    ownProps
  }),
  (dispatch) => ({})
)(ItemNews);
