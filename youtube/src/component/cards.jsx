import React from 'react';
import Card from './card.jsx';

const Cards = ({ videos }) => {
    
    return (
      <div className="cards">
        {videos.map((video, i) => 
          <Card key={video.id} video={video} />
        )}
        
     </div>
    );
}

export default Cards;




