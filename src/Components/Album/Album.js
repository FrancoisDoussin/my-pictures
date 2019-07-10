import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './Album.css';

function Album() {

  const [folders, setFolders] = useState([]);

  useEffect(() => {
    Axios.get('/albums')
      .then((response) => {
        setFolders(response.data);
      })
  }, []);

  return (
    <div>
      { folders.length ?
        folders.map((folder, key) => {
          return (
            <Link key={key} to={`/album/${folder}`}>
                {folder}
            </Link>
          )
        })
        : <p>No Album</p>
      }
    </div>
  );
}

export default Album;
