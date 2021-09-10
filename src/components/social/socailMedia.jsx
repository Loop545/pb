import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';

// Styles
import './social.scss';

const SocialMediaButtons = () => {
	return (
		<div className="share-container">
			<FacebookShareButton
				url={'http://www.pbghetto.com'}
				quote={'Pradip - World is yours to explore'}
				hashtag="#pradipwrites"
			>
				<FacebookIcon size={36} round={true} />
			</FacebookShareButton>
			<LinkedinShareButton
				title="Pradip Writes"
				source="http://www.pbghetto.com"
			>
				<LinkedinIcon size={36} round={true} />
			</LinkedinShareButton>
			<TwitterShareButton
				url={'http://www.pbghetto.com'}
				quote={'Pradip - World is yours to explore'}
				hashtag="#pradipwrites"
			>
				<TwitterIcon size={36} round={true} />
			</TwitterShareButton>
		</div>
	);
};

export default SocialMediaButtons;
