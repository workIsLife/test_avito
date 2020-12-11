import React from "react";
import Card from "../displayCard";
import { connect } from "react-redux";
import { getItem } from "../../action/getItem";

function Home(props) {
  return (
    <>
      <h1>
        {props.stateCard.map((el, id) => (
          <Card key={id} detailNews={props.saveId} content={el} />
        ))}
      </h1>
      {console.log(props.stateCard)}
    </>
  );
}

export default connect(
  (state) => ({
    stateCard: state
  }),
  (dispatch) => ({
    saveId: (id) => {
      dispatch(
        getItem(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
      );
    }
  })
)(Home);
