import React from 'react';
import styles from './detail.module.css';

const detail = ({ selectedVideo }) => {
  return (
    <div>
      <div className={styles.detail}>
        {console.log(selectedVideo.snippet)}
        <iframe className={styles.video} id="ytplayer" type="text/html" width="720" height="405"
        src={`https://www.youtube.com/embed/${selectedVideo.id}`}
        frameborder="0" allowfullscreen title="video"/>
        <p className={styles.video_text}>{selectedVideo.snippet.title}</p>
        <article className={styles.video_des}>{selectedVideo.snippet.description}</article>
      </div>
    </div>
  );
}

export default detail;