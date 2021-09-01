import React from 'react';

const Card = ({ title, thumbnail, channelTitle }) => { // {}안에 작성하는 것은 비구조화 할당으로 아래에서 props를 붙일 필요x  
  return (
      <div className="card">
        <div className="card-img">
          <img className="thumbnail" src={thumbnail} alt="썸네일"></img>
        </div>
        <div className="card-img-text">
          <p>{title}</p>
          <p>{channelTitle}</p>
        </div>
      </div>
    );

}

export default Card;