import { Link } from 'react-router-dom';
import React from 'react';
import './BossCard.css';

const BossCard = ({ path, label, text: dungeonName, src }) => {
  return (
    <Link to={path} className="boss-card">
      <div className="picture-wrap" data-category={label}>
        <img src={src} />
      </div>
      <h1>{dungeonName}</h1>
    </Link>
  );
}

export default BossCard;