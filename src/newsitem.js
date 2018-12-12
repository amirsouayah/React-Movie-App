import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Newsitem=({item})=>{
    return(<div className='newsitem-app'>
        <h2>{item.title}</h2>
        <img src={item.image} /><br />
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={item.rating}
        />
                {/* <div>{item.rating}</div> */}
    </div>)
}
export default Newsitem;