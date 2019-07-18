import React, {Component} from 'react';
import Artists from './Artists'




class App extends Component{
    state = { artistQuery: '', artist:{}};

    updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value});
    }
    
    handleKeyPress = event => {
        if(event.key === 'Enter'){
            this.searchArtist();
        }
    }
    // https://spotify-api-wrapper.appspot.com/artist/
    searchArtist = () => {
        fetch('https://spotify-api-wrapper.appspot.com/artist/'+this.state.artistQuery)
        .then(response => response.json())
        .then(json => {
            console.log('json.artists', json.artists);
            return this.setState({artist: json.artists})
        })
        .catch(error => alert(error.message));
   }

   getTracks = () =>{
        console.log('externalURL',this.state.artist);
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
               <Artists artist={this.state.artist} /> 
               <button onClick={this.getTracks}>Tracks</button>
            </div>
       ) 
    }
}

export default App;