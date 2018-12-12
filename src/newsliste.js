import React from 'react';
import  Newsitem from './newsitem'
import LoaderHOC from'./fctHOC'

const Newslist=(props)=>{
    return(
        props.news.map((el,i)=>{ return <Newsitem item ={el}  key={i} />
        })
    )
}
export default  LoaderHOC(Newslist);