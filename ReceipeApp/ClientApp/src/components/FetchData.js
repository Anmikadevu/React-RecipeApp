import React, { Component} from 'react';

import { Receipe } from './Receipe';
import { SearchItem } from './SearchItem'
import { NavMenu } from './NavMenu';
import './FetchData.css'
export class FetchData extends Component {
    state = {

        receipes: [],
        filteredList: [],
        search: 'chicken'
        
     
    }
    componentDidMount() {
        this.fetchData();


    }
    fetchData = async () => {
        const App_ID = 'bbd247e6';
        const App_key = 'f495ad534a7501de04e24963055b5d24';
        const response = await fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=${App_ID}&app_key=${App_key}`)
        //console.log("reponse",response)
        const data = await response.json();
        //console.log(data)
        const receipeArray = data.hits
        this.setState({ receipes: receipeArray })
        //console.log(this.state.receipes)
    }
    handleChange = (e) => {

        this.setState({
            search : e.target.value

        })

       // console.log(this.state.searchedItem)
        
    }
    handleSearchSubmit = async (e) => {

        const App_ID = 'bbd247e6';
        const App_key = 'f495ad534a7501de04e24963055b5d24';
        const recipeName = e.target.value;
        e.preventDefault();
        const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${App_ID}&app_key=${App_key}`);

        const data = await api_call.json();
        this.setState({ receipes: data.hits });
        console.log(this.state.recipes);
        
        //const filteredreceipes = this.state.receipes.filter((recipe) =>

        //    recipe.recipe.label === this.state.searchedItem
            
            
        //)
        //this.setState({ receipes: filteredreceipes })

    }
    render() {
      

       
        return (
            <div className="FetchData">

                <NavMenu />
                <form className="search-form" style={{ textAlign: "center" }} onSubmit={this.handleSearchSubmit}>

                    <input className="search-bar" 
                        name="searchedItem"
                        type="text"
                        onChange={this.handleChange} />
                    <button
                        className="search-button"
                        type="submit"
                        
                    >Search</button>
                </form>
                <div className="recipes"> {this.state.receipes.map((receipe) => (<Receipe
                    key={receipe.recipe.label}
                    title={receipe.recipe.label}
                    image={receipe.recipe.image}
                    calories={receipe.recipe.calories}
                    ingredients={receipe.recipe.ingredients}

                />)

                )}</div>
               
            </div>
        );
    }
}


