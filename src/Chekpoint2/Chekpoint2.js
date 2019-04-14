import React , {Component} from 'react';
import '../App.js';
import '../index.css';
class Chekpoint2 extends React.Component {
    render() {
        const mystyle ={
            fontWeight: 'bold' ,
            color:'yellow' 
        }
        return(
            
        <div className="chekpoint" style={{backgroundColor: this.props.bak}}>
            <center>
                <p className="titre" style={mystyle}>{this.props.titre}</p>
                <p>{this.props.text}</p>
                <button>{this.props.savoir}</button>
             
         
                </center>

        </div> 
        )
    }
}
export default Chekpoint2;