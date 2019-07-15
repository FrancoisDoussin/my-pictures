import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Axios from "axios";
import {Card, Col, Row} from "antd";
import "./Photo.css";

function Photos({ match }) {
  const [pictures, setPictures] = useState([]);
  const [description, setDescription] = useState('wait');
  const folder = match.params.folder;

  useEffect(() => {
    Axios
      .get(`/albums/${folder}/description.md`)
      .then(response => setDescription(response.data));

    Axios
      .get(`/albums/${folder}/pictures`)
      .then(response => setPictures(response.data));
  },[folder]);

  return (
    <div>
      <Row>
        <Col>
          <ReactMarkdown source={description} />
        </Col>
      </Row>
      <Row gutter={16}>
        { pictures.map((picture, key) => {
          return (
            <Col key={key} md={{ span: 8 }} style={{paddingTop: "10px"}}>
              <Card
                hoverable
                bodyStyle={{display: "none"}}
                cover={
                  <img
                    alt={folder}
                    src={`/albums/${folder}/pictures/${picture}`}
                  />
                }
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Photos;
