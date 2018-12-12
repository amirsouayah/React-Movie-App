import React, { Component } from 'react';
import Header from './header.js'
import Newslist from './newsliste.js'
import Star from'./stars'
import './App.css';
const newstab=[{
  id:'1',
  title:'Cover',
  image: "https://m.media-amazon.com/images/M/MV5BMTQzOTUyODMyOV5BMl5BanBnXkFtZTcwNzY2MzU1MQ@@._V1_.jpg",
  rating : '5' ,
  },
  
  {
  id:'2',
  title:'Looking Glass',
  image:'https://m.media-amazon.com/images/M/MV5BMTYxMzg1OTI3Nl5BMl5BanBnXkFtZTgwOTQ4Njk2NDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
  rating : '4'
  },
  {
  id:'3',
  title:'Demascus',
  image:'http://www.cimaflash.co/wp-content/uploads/2018/07/a98403829cc9b1b1e9452149586b1ea9-238x340.jpg',
  rating : '3'
  },
  {
  id:'4',
  title:'Natural Selection',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvaeKdVGT-jpV7z68CooEwHzezOLOOS9CmwJ1vs3RKjCEFbnTs',
  rating : '2'
  }]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        news:newstab,
        filtred:newstab,
        loading : "0"
      }

      setTimeout(
        function() {
            this.setState({loading:"1"});
        }
        .bind(this),
        3000
    );
}



addNewMovie(newMovie) {
  this.setState({
    newstab: 
    newstab.push({
      id: Math.random,
      title: prompt('Movie Title'),
      image: prompt('url'),
      rating : Number(prompt('movie rating: '))
    })
  })
}
search(keyword){
  let y =this.state.news.filter((el,i)=>{return el.title.toLowerCase().indexOf(keyword)>-1})
  this.setState({filtred:y})
}
searchrating(rate){
  let z =this.state.news.filter((el,i)=>{return el.rating==rate})
  this.setState({filtred:z})
}
  render() {
    return (
      <div className="App">
       {/* <Header searchname={x=>this.search(x) }/> */}
       <div className="App-header">
          <div className="search-rating">
       <Header searchname={x=>this.search(x) }/>
       <Star ratingname={z=>this.searchrating(z)}/>
          </div>
       <Newslist className="movie-card" news={this.state.filtred} loading={this.state.loading} />
          <div className="new-movie-card" onClick={()=> this.addNewMovie()}> + </div>
       </div>
       
      </div>
    );
  }
}

export default App;
