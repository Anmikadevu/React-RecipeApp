import React, { Component } from 'react';

 export class Receipe extends Component {
    state = {}
     render() {
        // console.log(this.props.ingredients);
         return (
             <div style={{ textAlign: "center" }}>
                <h1>{this.props.title}</h1>
                <p>{this.props.calories}</p>
                <ul>
                    
                    {this.props.ingredients.map((item,index) => (<li key={item.index}>{item.text}</li>)

                        

                   )
                    }

                </ul>
                <img src={this.props.image} alt="" />

            </div>

        );
    }
}

