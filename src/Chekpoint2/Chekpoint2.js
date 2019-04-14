import React , {Component} from 'react';
import '../App.js';
import '../index.css';
class Chekpoint2 extends Component {
    render() {
        return(
            
        <div className="chekpoint" style={{backgroundColor: this.props.bak}}>
            <center>
                <p className="titre">{this.props.titre}</p>
                <p>{this.props.text}</p>
                <button>{this.props.savoir}</button>
             
         
                </center>

        </div> 
        )
    }
}
export default Chekpoint2;