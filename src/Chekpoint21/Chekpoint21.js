import React , {Component} from 'react';
import '../App.js';
import '../index.css';
class Chekpoint21 extends Component {
    render() {
        return(
            
        <div className="image" >
             
         <center>
             
             <img src={this.props.logo} className="image" />
        
              <p>{this.props.name} </p>
        </center>
        </div> 
        )
    }
}
export default Chekpoint21;