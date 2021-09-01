import React from 'react';

const Card = ({ video: { snippet } }) => { 
  // {}안에 작성하는 것은 비구조화 할당으로 아래에서 props를 붙일 필요 x,한번 더 비구조화 할당을 처리할 수 있다 
  return (
      <div className="card">
        <div className="card-img">
          <img className="thumbnail" src={snippet.thumbnails.default.url} alt="썸네일"></img>
        </div>
        <div className="card-img-text">
          <p>{snippet.title}</p>
          <p>{snippet.channelTitle}</p>
        </div>
      </div>
    );
}

export default Card;