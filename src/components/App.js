import React from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "../styles.css";
//import Card from "../displayCard";
import getNewsAPI from "../API/getNews";
import { getNews } from "../action/getNews";
import Home from "./Home/Home";
import ItemNews from "./ItemNews/ItemNews";
import { getItem } from "../action/getItem";

const { Header, Footer, Content } = Layout;

function App(props) {
  return (
    <div className="App">
      <Header>
        <h1 className="logo">Top100News</h1>
        <button onClick={() => props.toUpdate()}>click</button>
        <button onClick={props.saveId}>Click2 </button>
      </Header>
      <Content className="Content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/item/:id" component={ItemNews} />
        </Switch>
      </Content>
      <Footer className="Footer">
        <p>Ant Design ©2018 Created by Ant UED</p>
      </Footer>
    </div>
  );
}

export default connect(
  (state) => ({
    stateCard: state
  }),
  (dispatch) => ({
    toUpdate: () => {
      dispatch(getNews());
    },
    saveId: (id) => {
      dispatch(
        getItem(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
      );
    }
  })
)(App);
