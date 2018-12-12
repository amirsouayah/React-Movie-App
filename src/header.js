import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:''
          }
    }
    handelchange=(event)=>{
        this.setState({keyword:event.target.value})
        this.props.searchname(event.target.value)
        // this.props.searchname(this.state.keyword)
    }
    render() { 
        return (<div className='header-app'> 
        <h1>React Movie App</h1>
        <input type='text'  onChange={this.handelchange} />
               
        </div>  );
    }
}
 
export default Header;