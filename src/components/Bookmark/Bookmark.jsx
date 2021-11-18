import React from 'react';
import IconOn from 'assets/bookmarkon-icon@2x.svg';
// import IconOff from 'assets/bookmarkoff-icon@2x.svg';

function Bookmark({ text, hendleClick }) {
  return (
    <div className="btn wrapper">
      <button className="btn btn-primary initialism" onClick={hendleClick}>
        <img src={IconOn} className="bookmark-icon" alt={text} />
          {text}
      </button>
    </div>
  );
}

export default Bookmark;