import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Artists extends Component {
    state = {items: [] };
    render(){
        const { href, items} = this.props.artist;
        return(
            <div>
                { 
                    Object.entries(this.props.artist).length !== 0
                    ?
                    this.props.artist.items.map(
                            a => {
                                return <Item key={a.id} item={a} />
                            }
                    )
                    : 
                    null
                 }
               
            </div>
        )
    }
}

const Item = props =>{
    let genres = [];
    genres = props.item.genres;
    let images = [];
    images = props.item.images;
    return <div>
                {images.map(i =>
                    <Image key={i.id} image={i} />    
                )}
                <p>{props.item.name}</p>
                {genres.map(g => 
                    <Genre key={g.id} genre={g} />
                )}
                <p>{props.item.href}</p>
                <p>{props.item.followers.total}</p>
            </div>;
}
const Image = props => {
    return <div>
        <p>
        {
            props.image.height == 160 
            ? 
                <img src={props.image.url} alt="image"/>
            : 
                null
        }
        </p>
        
    </div>
}
const Genre = props => {
    return <div>
                <p>{props.genre}</p>
           </div>;
}
export default Artists;