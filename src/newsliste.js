import React from 'react';
import  Newsitem from './newsitem'

const Newslist=(props)=>{
    return(
        props.news.map((el,i)=>{ return <Newsitem item ={el}  key={i} />

        })
    )
}
export default  Newslist;