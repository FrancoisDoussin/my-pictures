import { Layout} from 'antd';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Album from "../Album/Album";
import Photos from "../Photos/Photos";
import 'antd/dist/antd.css';
import Header from "../Header/Header";

const { Content } = Layout;

const style = {
  padding: '0 50px',
  background: '#ECECEC',
  minHeight: "100vh"
};

function AppRouter() {
  return (
    <Layout>
      <Router>
        <Header/>
        <Content style={style}>
            <Route path="/" exact component={Album} />
            <Route path="/album/:folder" component={Photos} />
        </Content>
      </Router>
    </Layout>
  );
}

export default AppRouter;