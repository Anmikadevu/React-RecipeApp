import React, { Component } from 'react';

export class Search extends Component {
    state = {}
    render() {
        return (
            <form className="search-form">

                <input className="search-bar" type="text" />
                <button className="search-button" type="submit">Search</button>
                <input></input>
            </form>

        );
    }
}
