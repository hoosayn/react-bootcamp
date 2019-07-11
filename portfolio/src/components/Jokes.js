import React, {Component } from 'react';


class Jokes extends Component {
    state = { joke: {}, moreJokes: [] };

    getMoreJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten') 
        .then(response => response.json())
        .then(json => {
            console.log('jsonarr', json);
            return this.setState({moreJokes: json});
        }).catch(error => alert(error.message));
    }

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => {
            console.log('json', json);
            return this.setState({joke: json});
        }).catch(error => alert(error.message));
    }
    render(){
        return(
            <div>
            <h2>Highlighted Joke</h2>
            <Joke joke={this.state.joke}/>
            <hr/>
            <button onClick={this.getMoreJokes}>Ten More Jokes..</button>
            {
                this.state.moreJokes.map(
                                            j => <Joke key={j.id} joke={j}/>
                                        )
            }
            </div>
        )
    }
}

const Joke = ( { joke : {setup, punchline} } ) => (
                                                    <p>{setup} <em>{punchline}</em></p>
                                                  )

export default Jokes;