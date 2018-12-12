import React, {Component} from 'react';
import './LoaderHOC.css'
function LoaderHOC(WrappedComponent) {
  return class LoaderHOC extends Component{
  

    render(){
    
        return this.props.loading==="0" ? <div class="lds-ripple"><div></div><div></div></div> : <WrappedComponent {...this.props}/>;
    
      }
  }
}

export default LoaderHOC;