import React, {Component} from 'react';
import Projects from './Projects';
import Socialprofiles from './SocialProfiles';
import profile from '../assets/profile.jpg';
import Title from './Title';



class App extends Component{
    state = { displayBio : false};

    toggleDisplayBio = () => {
        this.setState({displayBio : !this.state.displayBio});
    }

    render(){
       
       return (
           <div>
               <img src={profile} alt ='profile' className='profile' />
               <h1> Hi!</h1>
               <p> My name is Asif</p>
               <Title />
               {
                    this.state.displayBio
                    ? 
                        <div>
                            <p>I love coding!</p> 
                            <p>In free times, I think about coding concepts.</p>
                            <p>I sleep and rise thinking some coding concepts in my head.</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>

                    :  
                        <div>
                            <button onClick={this.toggleDisplayBio}>Show More</button>
                        </div>
               }
               <hr/>
               <Projects /> 
               <hr/>
               <Socialprofiles />
               
            </div>
       ) 
    }
}


export default App;