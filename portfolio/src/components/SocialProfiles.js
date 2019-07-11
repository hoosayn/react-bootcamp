import React from 'react';
import SOCIAL_PROFILES from '../data/socilaProfiles';

const SocialProfiles = () => 
    (
        <div>
            <h2>Connect with me!</h2>
            <div>
                {
                    SOCIAL_PROFILES.map(sp => (
                            <SocialProfile key={sp.id} socialprofile={sp} />
                        )
                    )
                }
            </div>
        </div>
        
    )
    

const SocialProfile = (props) => {
    const {link, image} = props.socialprofile;
    return(
        <span>
            <a href={link}><img src={image} alt='socialimage' style={{ width: 35, height: 35, margin: 10}}/></a>
        </span>
    )
}

export default SocialProfiles;