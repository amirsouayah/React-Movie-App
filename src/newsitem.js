import React from 'react';

const Newsitem=({item})=>{
    return(<div className='newsitem-app'>
        <h2>{item.title}</h2>
        <img src={item.image} />
        <div>{item.rating}</div>
    </div>)
}
export default Newsitem;