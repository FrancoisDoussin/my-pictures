import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Axios from "axios";
import './Photos.css';

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
  },[]);

  return (
    <div>
      <ReactMarkdown source={description} />
      { pictures.map((picture, key) => {
        return <img
          alt={`album-${folder}`}
          key={key}
          src={`/albums/${folder}/pictures/${picture}`}
        />
      })}
    </div>
  );
}

export default Photos;
