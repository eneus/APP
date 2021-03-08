import React from "react";
import { Link } from 'react-router-dom'
import logo from 'assets/Logo-white.png';

function Card({ id, webTitle, sectionId, fields }) {
  var styles = "card col-md-4 " + sectionId;
  var imgstyle = fields.thumbnail ? "card-img-top thumbnail" : "card-img-top no-thumbnail";
  
  return (
    <div className={styles}>
      <Link to={id}>
        <img
          alt={webTitle}
          className={imgstyle}
          src={fields.thumbnail ? fields.thumbnail : logo}
        />
        <div className="card-body bg-primary">
          <h2 className="title">{webTitle}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Card;
