import React from "react";
import {FacebookShareButton, FacebookIcon,LinkedinShareButton,LinkedinIcon} from "react-share";
       
const SocialMediaButtons = (props) => {
    return (
        <div className='share-container'>
            <FacebookShareButton 
            url={"http://www.pbghetto.com"}
            quote={"Pradip - World is yours to explore"}
            hashtag="#pradipwrites"
            >
                <FacebookIcon size={36} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton 
            title='Pradip Writes'
            source="http://www.pbghetto.com"
            >
                <LinkedinIcon size={36} round={true} />
            </LinkedinShareButton>
            <FacebookShareButton 
            url={"http://www.pbghetto.com"}
            quote={"Pradip - World is yours to explore"}
            hashtag="#pradipwrites"
            >
                <FacebookIcon size={36} round={true} />
            </FacebookShareButton>
        </div>
    );
}

export default SocialMediaButtons;