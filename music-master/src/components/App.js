import React, {Component} from 'react';
import Artists from './Artists'




class App extends Component{
    state = { artistQuery: '', artists:{}};

    updateArtistQuery = event => {
        console.log('event.target.value', event.target.value);
        this.setState({ artistQuery: event.target.value});
    }
    
    handleKeyPress = event => {
        if(event.key === 'Enter'){
            this.searchArtist();
            console.log('this.state.artists', this.state.artists);
        }
    }
    searchArtist = () => {
        fetch('https://spotify-api-wrapper.appspot.com/artist/bruno')
        .then(response => response.json())
        .then(json => {
            // console.log('json', json);
            // console.log('json.artists', json.artists);
            // console.log('json.artists.href', json.artists.href);
            return this.setState({artists: json.artists})
        })
        .catch(error => alert(error.message));
   }

    
    render(){
       
       return (
           <div>
               <h2>Music Master</h2>
               <input placeholder='Search for an Artist' 
                      onChange={this.updateArtistQuery}
                      onKeyPress={this.handleKeyPress}  />
               <button onClick={this.searchArtist}>Search</button>
               
               <div>Artist Details</div>
               <Artists artist={this.state.artists} /> 
            </div>
       ) 
    }
}

export default App;