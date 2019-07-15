import { Row, Col, Card, Spin } from 'antd';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const style = {
  album: {
    paddingTop: "10px"
  },
  card: {
    textAlign: "center"
  },
  empty: {
    height : "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

function Album() {

  const [folders, setFolders] = useState([]);

  useEffect(() => {
    Axios.get('/albums')
      .then((response) => {
        setFolders(response.data);
      })
  }, []);

  return (
    <Row gutter={16}>
    { folders.length ?
      folders.map((folder, key) => {
        return (
          <Col key={key} md={{ span: 12 }} style={style.album} >
            <Link key={key} to={`/album/${folder}`}>
              <Card
                hoverable
                cover={<img alt="card" src={`/albums/${folder}/image.jpg`} />}
                style={style.card}
              >
                {folder}
              </Card>
            </Link>
          </Col>
        )
      })
      :
      <Col span={24} style={style.empty}>
        <Spin size="large" />
      </Col>
    }
    </Row>
  );
}

export default Album;
