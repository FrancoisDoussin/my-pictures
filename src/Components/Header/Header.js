import React from 'react';
import {Link} from "react-router-dom";

function Header() {

  const style = {
    header: {
      height: "50px",
      padding: "5px 0",
      backgroundColor: "#a7a7a7"
    },
    link: {
      height: "100%",
      display: "flex",
      color: "#000000",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      margin: "0 10px",
    },
    logo: {
      maxHeight: "100%",
      width: "auto"
    }
  };

  return (
    <div style={style.header}>
      <Link to={`/`} style={style.link}>
        <p style={style.title}>François Doussin</p>
        <img alt="logo" style={style.logo} src="https://cdn.pixabay.com/photo/2017/03/02/19/46/camera-2112207_960_720.png"/>
      </Link>
    </div>
  );
}

export default Header;
