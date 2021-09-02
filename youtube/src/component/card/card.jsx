import React from 'react';
import styles from '../card/card.module.css';

const Card = ({ video: { snippet }, onClickVideo, video, display }) => { //video의 snippet이 받을 수 있게 하니까 아래에서 video 쓰려면 video 다시 작성해야됨
  // {}안에 작성하는 것은 비구조화 할당으로 아래에서 props를 붙일 필요 x,한번 더 비구조화 할당을 처리할 수 있다 
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
      <div className={`${styles.card} ${displayType}`} onClick={() => onClickVideo(video) }> 
        <div className={styles.card_img}>
          <img className={styles.thumbnail} src={snippet.thumbnails.default.url} alt="썸네일"></img>
        </div>
        <div className={styles.card_img_text}>
          <p>{snippet.title}</p>
          <p>{snippet.channelTitle}</p>
        </div>
      </div>
    );
}

export default Card;