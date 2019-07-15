import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Artists extends Component {
    state = {items: [] };
    render(){
        const { href, items} = this.props.artist;
        console.log(' this.props.artist', this.props.artist);
       
        return(
            <div>
                { 
                    this.props.artist ?
                      this.props.artist.items.map(
                        a => <Item key={a.id} item={a} />
                    )
                
                    <Item items={{items}} /> 
                 }
                {href}
            </div>
        )
    }
}

const Item = props =>{
    return <p>props.name</p>;
}

export default Artists;