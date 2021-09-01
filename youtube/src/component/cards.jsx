import React from 'react';
import Card from './card.jsx';

const Cards = ({ items }) => {

    return (
      <div className="cards">
        {items.map((v,i) => 
          v.items.map((val,idx) =>
            <Card key={v.items[idx].id}
            title={v.items[idx].snippet.title} 
            thumbnail={v.items[idx].snippet.thumbnails.default.url} 
            channelTitle={v.items[idx].snippet.channelTitle}>
            </Card>
          )
        )}
     </div>
    );
}

export default Cards;


