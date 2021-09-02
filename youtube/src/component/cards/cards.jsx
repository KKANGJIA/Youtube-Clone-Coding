import React from 'react';
import Card from '../card/card.jsx';
import styles from './cards.module.css';

const Cards = ({ videos, onClickVideo, display }) => {
    
    return (
      <div className={styles.cards}>
        {videos.map((video, i) => 
          <Card display={display} onClickVideo={onClickVideo} key={video.id} video={video} />
        )}
        
     </div>
    );
}

export default Cards;




